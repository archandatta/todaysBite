const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipeMealPlan', {
    recipeId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      field: 'recipe_id'
    },
    mealId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      field: 'meal_id'
    },
    course: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'recipe_meal_plan',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_recipe_meal_plan_1",
        unique: true,
        fields: [
          { name: "recipe_id" },
          { name: "meal_id" },
        ]
      },
    ]
  });
};
