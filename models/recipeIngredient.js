const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipeIngredient', {
    recipeId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      field: 'recipe_id'
    },
    ingredientId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      field: 'ingredient_id'
    },
    stepNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'step_number'
    }
  }, {
    sequelize,
    tableName: 'recipe_ingredient',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_recipe_ingredient_1",
        unique: true,
        fields: [
          { name: "recipe_id" },
          { name: "ingredient_id" },
        ]
      },
    ]
  });
};
