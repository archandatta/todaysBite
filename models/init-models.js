var DataTypes = require("sequelize").DataTypes;
var _sequelizeMetum = require("./sequelizeMetum");
var _user = require("./user");

function initModels(sequelize) {
  var sequelizeMetum = _sequelizeMetum(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    sequelizeMetum,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
