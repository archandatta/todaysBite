const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tag', {
    tagId: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'tag_id'
    },
    tag: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tag',
    timestamps: false
  });
};
