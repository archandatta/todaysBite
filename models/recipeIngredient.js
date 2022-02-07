const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'recipeIngredient',
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
			ingredientId: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: true,
				references: {
					model: 'ingredient',
					key: 'id',
				},
				field: 'ingredient_id',
			},
			stepNumber: {
				type: DataTypes.INTEGER,
				allowNull: true,
				field: 'step_number',
			},
		},
		{
			sequelize,
			tableName: 'recipe_ingredient',
			timestamps: true,
			defaultValue: 'UUIDV4',
		}
	);
};
