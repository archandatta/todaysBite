const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'step',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
				unique: true,
			},
			stepNum: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			description: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			recipeId: {
				type: DataTypes.UUID,
				allowNull: true,
				references: {
					model: 'recipe',
					key: 'id',
				},
				field: 'recipe_id',
			},
		},
		{
			sequelize,
			tableName: 'step',
			timestamps: true,
			indexes: [
				{
					name: 'sqlite_autoindex_step_1',
					unique: true,
					fields: [{ name: 'id' }],
				},
			],
		}
	);
};
