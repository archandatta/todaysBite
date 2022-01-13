const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mealPlan', {
    mealId: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'meal_id'
    },
    recipeName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'recipe_name'
    },
    day: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'meal_plan',
    timestamps: false
  });
};
