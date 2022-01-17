const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: true,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
				unique: true,
			},
			username: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			password: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: 'user',
			timestamps: true,
			defaultValue: '1',
			indexes: [
				{
					name: 'sqlite_autoindex_user_1',
					unique: true,
					fields: [{ name: 'id' }],
				},
			],
		}
	);
};
