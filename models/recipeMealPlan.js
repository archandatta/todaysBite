const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
		'recipeMealPlan',
		{
			recipeId: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: true,
				references: {
					model: 'recipe',
					key: 'id',
				},
				field: 'recipe_id',
			},
			mealId: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: true,
				references: {
					model: 'meal_plan',
					key: 'id',
				},
				field: 'meal_id',
			},
			course: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			day: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			recipeName: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'recipe_name',
			},
		},
		{
			sequelize,
			tableName: 'recipe_meal_plan',
			timestamps: true,
			defaultValue: 'UUIDV4',
		}
	);
};
