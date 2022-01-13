const output = '../models';
const options = {
	directory: output,
	caseFile: 'c',
	caseModel: 'c',
	caseProp: 'c',
	useDefine: false,
	singularize: true,
	spaces: true,
	indentation: 2,
	additional: {
		timestamps: false,
	},
};

const storage = '../mydb.db';
const sqlite = {
	dbname: 'mydb.db',
	options: { dialect: 'sqlite', storage: storage },
	autoOptions: { dialect: 'sqlite', storage: storage, ...options },
};

// Change to export appropriate config for your database
module.exports = sqlite;
