'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('user', {
			id: { type: Sequelize.UUIDV4, primaryKey: true },
			username: Sequelize.STRING,
			password: Sequelize.STRING,
			created_at: Sequelize.DATE,
			updated_at: Sequelize.DATE,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('user');
	},
};
