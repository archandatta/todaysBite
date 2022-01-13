const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipeTag', {
    recipeId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      field: 'recipe_id'
    },
    tagId: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true,
      field: 'tag_id'
    }
  }, {
    sequelize,
    tableName: 'recipe_tag',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_recipe_tag_1",
        unique: true,
        fields: [
          { name: "recipe_id" },
          { name: "tag_id" },
        ]
      },
    ]
  });
};
