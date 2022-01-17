const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingredient', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quantity: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    store: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ingredient',
    timestamps: true,
    defaultValue: 'UUIDV4',
    indexes: [
      {
        name: "sqlite_autoindex_ingredient_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
