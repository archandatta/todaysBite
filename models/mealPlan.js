const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mealPlan', {
    id: {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true,
      unique: true
    },
    recipeName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'recipe_name'
    }
  }, {
    sequelize,
    tableName: 'meal_plan',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_meal_plan_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
