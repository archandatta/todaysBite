const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipeTag', {
    recipeId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'recipe',
        key: 'id'
      },
      field: 'recipe_id'
    },
    tagId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'tag',
        key: 'id'
      },
      field: 'tag_id'
    }
  }, {
    sequelize,
    tableName: 'recipe_tag',
    timestamps: true
  });
};
