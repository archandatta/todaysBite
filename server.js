const port = process.env.PORT || 5000;
const express = require('express');
const Sequelize = require('sequelize');
const initModels = require('./models/init-models');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

const sequelize = new Sequelize('sqlite:todaysbite.db');
const models = initModels(sequelize);

const DBAuthenticate = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

// POST - create user
app.post('/create-user', async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	try {
		const [ret] = await models.user.findOrCreate({
			where: { username: username },
			defaults: { username: username, password: password },
		});
		res.json(ret).status(200);
	} catch (e) {
		console.info(e);
	}
});

async function findOrCreateIngredients(ingredients) {
	const data = await Promise.all(
		ingredients.map((i) => {
			return models.ingredient.findOrCreate({
				where: { name: i.name },
				defaults: {
					i,
				},
			});
		})
	);

	const ingredientData = [];
	data.map((d) => {
		const ingredientString = JSON.stringify(d[0], null, 2);
		const ingredientParsed = JSON.parse(ingredientString);
		ingredientData.push(ingredientParsed);
	});

	return ingredientData;
}

// POST - add recipe
app.post('/create-recipe', async (req, res) => {
	if (req === undefined) {
		return res.status(204);
	}

	const recipe = req.body.data.recipeInput;
	const ingrediants = req.body.data.ingrediantInputs.ingrediants;
	const steps = req.body.data.stepInputs.steps;

	console.info(recipe, ingrediants, steps);

	try {
		const [recipeData] = await models.recipe.findOrCreate({
			where: { userId: recipe.userId, title: recipe.title },
			defaults: {
				...recipe,
			},
		});

		const ingredientData = await findOrCreateIngredients(ingrediants);
		const ingredientIds = ingredientData.map((i) => i.id);

		await Promise.all(
			ingredientIds.map((i) => {
				return models.recipeIngredient.findOrCreate({
					where: { recipeId: recipeData.dataValues.id, ingredientId: i },
					defaults: {
						recipeId: recipeData.dataValues.id,
						ingredientId: i,
					},
				});
			})
		);

		await Promise.all(
			steps.map((s) => {
				return models.step.findOrCreate({
					where: { recipeId: recipeData.dataValues.id, stepNum: s.stepNum },
					defaults: {
						stepNum: s.stepNum,
						description: s.description,
					},
				});
			})
		);

		const data = {
			recipeData,
			ingredientData,
		};
		res.json(data).status(200);
	} catch (e) {
		console.info(e);
	}
});

// POST - add meal plan
app.post('/create-meal-plan', async (req, res) => {
	if (req === undefined) {
		return res.status(204);
	}

	const userId = req.body.data.userId;

	const mealPlan = {
		day: req.body.data.day,
		course: req.body.data.course,
		recipeId: req.body.data.recipeData.id,
	};
	console.info(req.body.data);

	try {
		const [mealPlanData] = await models.mealPlan.findOrCreate({
			where: { userId: userId },
			defaults: {
				userId: userId,
			},
		});
		const mealPlanId = mealPlanData.dataValues.id;

		const [recipeMealPlanData] = await models.recipeMealPlan.findOrCreate({
			where: { recipeId: mealPlan.recipeId, mealId: mealPlanId, course: mealPlan.course, day: mealPlan.day },
			defaults: {
				mealId: mealPlanId,
				day: req.body.data.day,
				course: req.body.data.course,
				recipeId: req.body.data.recipeData.id,
				recipeName: req.body.data.recipeData.title,
			},
		});

		console.info(recipeMealPlanData);
		const data = {
			mealPlanData,
			recipeMealPlanData,
		};

		res.json(data).status(200);
	} catch (e) {
		console.info(e);
	}
});

// GET - find all recipes by user
app.get('/recipe/:id', async (req, res) => {
	const userId = req.params.id;

	try {
		const userRecipes = await models.recipe.findAll({
			order: [['createdAt', 'DESC']],
			where: { userId: userId },
		});

		const recipeIds = userRecipes.map((r) => r.id);

		const recipeIngredients = await models.recipeIngredient.findAll({
			where: { recipeId: recipeIds },
			include: [
				{ model: models.recipe, as: 'recipe' },
				{ model: models.ingredient, as: 'ingredient' },
			],
		});

		const steps = await models.step.findAll({
			order: [['stepNum', 'ASC']],
			where: { recipeId: recipeIds },
		});

		const recipeData = recipeIds.map((id) => {
			var ingrediants = [];
			var recipe;
			var recipeStep = [];

			steps.map((step) => {
				if (id === step.recipeId) {
					recipeStep.push(step);
				}
			});

			recipeIngredients.map((r) => {
				if (r.recipeId === id) {
					recipe = r.recipe;
					ingrediants.push(r.ingredient);
				}
			});
			return { recipe: recipe, ingredients: ingrediants, steps: recipeStep };
		});

		res.status(200).send(recipeData);
	} catch (e) {
		console.info(e);
	}
});

// GET - find ingredients from a list of recipes
app.get('/get-ingredients/:id', async (req, res) => {
	const userId = req.params.id;

	try {
		const [mealPlan] = await models.mealPlan.findAll({
			where: { userId: userId },
		});

		if (mealPlan === undefined) {
			return res.status(404);
		}

		const mealPlanId = mealPlan.dataValues.id;

		const recipeMealPlan = await models.recipeMealPlan.findAll({
			where: { mealId: mealPlanId },
		});

		const recipeIds = recipeMealPlan.map((m) => {
			const recipeMealPlan = JSON.parse(JSON.stringify(m, null, 2));
			return recipeMealPlan.recipeId;
		});

		const recipeIngredients = await models.recipeIngredient.findAll({
			where: { recipeId: recipeIds },
			include: [
				{ model: models.recipe, as: 'recipe' },
				{ model: models.ingredient, as: 'ingredient' },
			],
		});

		const recipeData = recipeIds.map((id) => {
			var ingredients = [];
			var recipe;
			recipeIngredients.map((r) => {
				if (r.recipeId === id) {
					recipe = r.recipe;
					if (r.ingredient === null) {
						return;
					}
					ingredients.push(JSON.parse(JSON.stringify(r.ingredient, null, 2)));
				}
			});
			return { recipe: recipe, ingredients: ingredients };
		});

		const ingredients = recipeData
			.map((r) => {
				return r.ingredients;
			})
			.flat();

		return res.status(200).send(ingredients);
	} catch (e) {
		console.info(e);
	}
});

// GET - find all recipes for a planned week
app.get('/meal-plan/:id', async (req, res) => {
	const userId = req.params.id;

	try {
		const [mealPlan] = await models.mealPlan.findAll({
			where: { userId: userId },
		});

		if (mealPlan === undefined) {
			return res.status(404);
		}

		const mealPlanId = mealPlan.dataValues.id;

		const recipeMealPlan = await models.recipeMealPlan.findAll({
			where: { mealId: mealPlanId },
		});

		const plan = recipeMealPlan.map((m) => {
			return JSON.parse(JSON.stringify(m, null, 2));
		});

		console.info(plan);
		return res.status(200).send(plan);
	} catch (e) {
		console.info(e);
	}
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
DBAuthenticate();
