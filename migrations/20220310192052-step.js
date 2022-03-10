'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('step', {
			id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, allowNull: false, primaryKey: true },
			stepNum: Sequelize.INTEGER,
			description: Sequelize.STRING,
			recipe_id: {
				type: Sequelize.UUID,
				references: { model: 'recipe', key: 'id' },
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('step');
	},
};
