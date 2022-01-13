const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite:mydb.db');

const Recipe = sequelize.define(
	'recipes',
	{
		recipe_id: { type: Sequelize.INTEGER, primaryKey: true },
		title: Sequelize.STRING,
	},
	{
		timestamps: false,
	}
);

const DBAuthenticate = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

// create a GET route
app.get('/recipe', async (req, res) => {
	try {
		const recipe = await Recipe.findAll();
		res.json(recipe);
	} catch (e) {
		// console.info(e);
	}
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
DBAuthenticate();
