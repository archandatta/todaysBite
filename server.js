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

// POST - add recipe
// TODO: tags
app.post('/create-recipe', async (req, res) => {
	// consider using query params for id

	const recipe = req.body.data.recipeInput;
	const ingrediants = req.body.data.ingrediantInputs.ingrediants;
	const steps = req.body.data.stepInputs.steps;

	console.info(recipe, ingrediants, steps);

	// try {
	// 	const [recipe] = await models.recipe.findOrCreate({
	// 		where: { title: req.body.recipe.title },
	// 		defaults: {
	// 			...req.body.recipe,
	// 		},
	// 	});

	// 	const [ingredient] = await models.ingredient.findOrCreate({
	// 		where: { name: req.body.ingredient.name },
	// 		defaults: {
	// 			...req.body.ingredient,
	// 		},
	// 	});

	// 	const [recipeIngredient] = await models.recipeIngredient.findOrCreate({
	// 		where: { recipeId: recipe.dataValues.id, ingredientId: ingredient.dataValues.id },
	// 		defaults: {
	// 			recipeId: recipe.dataValues.id,
	// 			ingredientId: ingredient.dataValues.id,
	// 		},
	// 	});

	// 	console.info(recipe.dataValues.id, ingredient.dataValues.id, recipeIngredient.dataValues);
	// 	res.json(recipe).status(200);
	// } catch (e) {
	// 	console.info(e);
	// }
});

// POST - add meal plan

// PUT - add tag to recipe

app.get('/user', async (req, res) => {
	res.send('user').status(200);
});

// GET - find all recipes by user
// TODO: tags, meal plan
app.get('/recipe/:id', async (req, res) => {
	const userId = req.params.id;

	// from user id get all recipe ids
	// then get all recipe data using ids

	try {
		const userRecipes = await models.recipe.findAll({
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

		const recipeData = recipeIds.map((id) => {
			var ingrediants = [];
			var recipe;
			recipeIngredients.map((r) => {
				if (r.recipeId === id) {
					recipe = r.recipe;
					ingrediants.push(r.ingredient);
				}
			});
			return { recipe: recipe, ingredients: ingrediants };
		});

		// console.info('all recipes', recipeId, JSON.stringify(recipe, null, 2));
		res.status(200).send(recipeData);
	} catch (e) {
		console.info(e);
	}
});

// GET - find ingredients from a list of recipes

// GET - find recipes by tag
// find the tag id from param
// use tag id to search recipe tag to find all recipes

// GET - find all recipes for a planned week

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
DBAuthenticate();
