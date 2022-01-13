const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    userId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      field: 'user_id'
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_user_1",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
