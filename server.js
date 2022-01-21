const port = process.env.PORT || 5000;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const Sequelize = require('sequelize');
const initModels = require('./models/init-models');
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

// Create user
app.post('/create-user', async (req, res) => {
	console.info(req.body);
	const username = req.body.username;
	const password = req.body.password;
	try {
		const ret = await models.user.create({ username: username, password: password });
		console.info(ret);
	} catch (e) {
		console.info(e);
	}
});

// create a GET route
app.get('/recipe', async (req, res) => {
	// console.info(req);
	try {
		const recipe = await models.tag.findAll();
		console.info(recipe);
		res.json(recipe).status(200);
	} catch (e) {
		console.info(e);
	}
});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
DBAuthenticate();
