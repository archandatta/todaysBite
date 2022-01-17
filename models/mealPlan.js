const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
		'mealPlan',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
				unique: true,
			},
			recipeName: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'recipe_name',
			},
		},
		{
			sequelize,
			tableName: 'meal_plan',
			timestamps: true,
			defaultValue: 'UUIDV4',
			indexes: [
				{
					name: 'sqlite_autoindex_meal_plan_1',
					unique: true,
					fields: [{ name: 'id' }],
				},
			],
		}
	);
};
