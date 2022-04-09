'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('recipe_meal_plan', 'day', { type: Sequelize.STRING });
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('recipe_meal_plan', 'day', { type: Sequelize.STRING });
	},
};
