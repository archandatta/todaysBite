const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
		'tag',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
				unique: true,
			},
			tag: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: 'tag',
			timestamps: true,
			defaultValue: 'UUIDV4',
			indexes: [
				{
					name: 'sqlite_autoindex_tag_1',
					unique: true,
					fields: [{ name: 'id' }],
				},
			],
		}
	);
};
