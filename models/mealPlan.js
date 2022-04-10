const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
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
			userId: {
				type: DataTypes.UUID,
				allowNull: true,
				references: {
					model: 'user',
					key: 'id',
				},
				field: 'user_id',
			},
		},
		{
			sequelize,
			tableName: 'meal_plan',
			timestamps: true,
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
