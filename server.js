const port = process.env.PORT || 5000;
const express = require('express');
const Sequelize = require('sequelize');
const initModels = require('./models/init-models');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

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
		const ret = await models.user.create({ username: username, password: password });
		res.json(ret).status(200);
	} catch (e) {
		console.info(e);
	}
});

// POST - add recipe
// take in recipe data, ingredients and tags
app.post('/create-recipe', async (req, res) => {
	// consider using query params for id
	// and the rest of the detials through body
	const userID = req.body.userID;
	const title = req.body.title;
	const description = req.body.description;
	const prepTime = req.body.prepTime;
	const cookTime = req.body.cookTime;

	try {
		// TODO: nested ingredients and tags creation
		const ret = await models.recipe.create({
			userId: userID,
			title: title,
			description: description,
			prepTime: prepTime,
			cookTime: cookTime,
		});
		res.json(ret).status(200);
	} catch (e) {
		console.info(e);
	}
});

// POST - add meal plan

// PUT - add tag to recipe

// GET - find all recipes by user
// along with the underlying data, ingredients, tags
app.get('/recipe', async (req, res) => {});

// GET - find ingredients from a list of recipes

// GET - find recipes by tag

// GET - find all recipes for a planned week

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
DBAuthenticate();
