const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipe', {
    recipeId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      field: 'recipe_id'
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    prepTime: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'prep_time'
    },
    cookTime: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'cook_time'
    },
    userId: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      },
      field: 'user_id'
    }
  }, {
    sequelize,
    tableName: 'recipe',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_recipe_1",
        unique: true,
        fields: [
          { name: "recipe_id" },
        ]
      },
    ]
  });
};
