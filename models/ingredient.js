const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingredient', {
    ingredientId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      field: 'ingredient_id'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    unit: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    store: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ingredient',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_ingredient_1",
        unique: true,
        fields: [
          { name: "ingredient_id" },
        ]
      },
    ]
  });
};
