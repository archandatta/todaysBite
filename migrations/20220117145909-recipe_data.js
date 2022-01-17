'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		// Recipe table
		await queryInterface.createTable('recipe', {
			id: { type: Sequelize.UUIDV4, primaryKey: true },
			title: Sequelize.STRING,
			description: Sequelize.STRING,
			prep_time: Sequelize.INTEGER,
			cook_time: Sequelize.INTEGER,
			user_id: {
				type: Sequelize.UUIDV4,
				references: { model: 'user', key: 'id' },
			},
			created_at: Sequelize.DATE,
			updated_at: Sequelize.DATE,
		});

		// Ingredient table
		await queryInterface.createTable('ingredient', {
			id: { type: Sequelize.UUIDV4, primaryKey: true },
			name: Sequelize.STRING,
			unit: Sequelize.STRING,
			quantity: Sequelize.DOUBLE,
			store: Sequelize.STRING,
			created_at: Sequelize.DATE,
			updated_at: Sequelize.DATE,
		});

		// Recipe indgredients table
		await queryInterface.createTable('recipe_ingredient', {
			recipe_id: {
				type: Sequelize.UUIDV4,
				references: { model: 'recipe', key: 'id' },
			},
			ingredient_id: {
				type: Sequelize.UUIDV4,
				references: { model: 'ingredient', key: 'id' },
			},
			step_number: Sequelize.INTEGER,
			created_at: Sequelize.DATE,
			updated_at: Sequelize.DATE,
		});

		// Tag table
		await queryInterface.createTable('tag', {
			id: { type: Sequelize.UUIDV4, primaryKey: true },
			tag: Sequelize.STRING,
			created_at: Sequelize.DATE,
			updated_at: Sequelize.DATE,
		});

		// Recipe Tags table
		await queryInterface.createTable('recipe_tag', {
			recipe_id: {
				type: Sequelize.UUIDV4,
				references: { model: 'recipe', key: 'id' },
			},
			tag_id: {
				type: Sequelize.UUIDV4,
				references: { model: 'tag', key: 'id' },
			},
			created_at: Sequelize.DATE,
			updated_at: Sequelize.DATE,
		});

		// Meal Plan table
		await queryInterface.createTable('meal_plan', {
			id: { type: Sequelize.UUIDV4, primaryKey: true },
			recipe_name: Sequelize.STRING,
			created_at: Sequelize.DATE,
			updated_at: Sequelize.DATE,
		});

		// Recipe Meal Plan table
		await queryInterface.createTable('recipe_meal_plan', {
			recipe_id: {
				type: Sequelize.UUIDV4,
				references: { model: 'recipe', key: 'id' },
			},
			meal_id: {
				type: Sequelize.UUIDV4,
				references: { model: 'meal_plan', key: 'id' },
			},
			course: Sequelize.STRING,
			created_at: Sequelize.DATE,
			updated_at: Sequelize.DATE,
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
