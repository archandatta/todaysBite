const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true,
      unique: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prepTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'prep_time'
    },
    cookTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'cook_time'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      },
      field: 'user_id'
    }
  }, {
    sequelize,
    tableName: 'recipe',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_recipe_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
