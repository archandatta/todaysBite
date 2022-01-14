const SequelizeAuto = require('sequelize-auto');

// Edit your database settings in config.js
const config = require('./config');
const options = {
	directory: '../models',
	caseFile: 'c',
	caseModel: 'c',
	caseProp: 'c',
	useDefine: false,
	singularize: true,
	spaces: true,
	indentation: 2,
	additional: {
		timestamps: true,
	},
};

var auto = new SequelizeAuto('todaysbite.db', '', '', {
	dialect: 'sqlite',
	storage: '../todaysbite.db',
	...options,
});

auto.run().then((data) => {
	const tableNames = Object.keys(data.tables);
	console.log(tableNames); // table list
	// console.log(data.foreignKeys); // foreign key list
	// console.log(data.text)         // text of generated files
});
