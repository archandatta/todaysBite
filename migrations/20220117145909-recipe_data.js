'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		// Recipe table
		await queryInterface.createTable('recipe', {
			id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, allowNull: false, primaryKey: true },
			title: Sequelize.STRING,
			description: Sequelize.STRING,
			prep_time: Sequelize.INTEGER,
			cook_time: Sequelize.INTEGER,
			user_id: {
				type: Sequelize.UUID,
				references: { model: 'user', key: 'id' },
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});

		// Ingredient table
		await queryInterface.createTable('ingredient', {
			id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, allowNull: false, primaryKey: true },
			name: Sequelize.STRING,
			unit: Sequelize.STRING,
			quantity: Sequelize.DOUBLE,
			store: Sequelize.STRING,
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});

		// Recipe indgredients table
		await queryInterface.createTable('recipe_ingredient', {
			recipe_id: {
				type: Sequelize.UUID,
				references: { model: 'recipe', key: 'id' },
			},
			ingredient_id: {
				type: Sequelize.UUID,
				references: { model: 'ingredient', key: 'id' },
			},
			step_number: Sequelize.INTEGER,
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});

		// Tag table
		await queryInterface.createTable('tag', {
			id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, allowNull: false, primaryKey: true },
			tag: Sequelize.STRING,
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});

		// Recipe Tags table
		await queryInterface.createTable('recipe_tag', {
			recipe_id: {
				type: Sequelize.UUID,
				references: { model: 'recipe', key: 'id' },
			},
			tag_id: {
				type: Sequelize.UUID,
				references: { model: 'tag', key: 'id' },
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});

		// Meal Plan table
		await queryInterface.createTable('meal_plan', {
			id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, allowNull: false, primaryKey: true },
			recipe_name: Sequelize.STRING,
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});

		// Recipe Meal Plan table
		await queryInterface.createTable('recipe_meal_plan', {
			recipe_id: {
				type: Sequelize.UUID,
				references: { model: 'recipe', key: 'id' },
			},
			meal_id: {
				type: Sequelize.UUID,
				references: { model: 'meal_plan', key: 'id' },
			},
			course: Sequelize.STRING,
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('recipe');
		await queryInterface.dropTable('ingredient');
		await queryInterface.dropTable('recipe_ingredient');
		await queryInterface.dropTable('tag');
		await queryInterface.dropTable('recipe_tag');
		await queryInterface.dropTable('meal_plan');
		await queryInterface.dropTable('recipe_meal_plan');
	},
};
