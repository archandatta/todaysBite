var DataTypes = require("sequelize").DataTypes;
var _ingredient = require("./ingredient");
var _mealPlan = require("./mealPlan");
var _recipe = require("./recipe");
var _recipeIngredient = require("./recipeIngredient");
var _recipeMealPlan = require("./recipeMealPlan");
var _recipeTag = require("./recipeTag");
var _recipe = require("./recipe");
var _tag = require("./tag");
var _user = require("./user");

function initModels(sequelize) {
  var ingredient = _ingredient(sequelize, DataTypes);
  var mealPlan = _mealPlan(sequelize, DataTypes);
  var recipe = _recipe(sequelize, DataTypes);
  var recipeIngredient = _recipeIngredient(sequelize, DataTypes);
  var recipeMealPlan = _recipeMealPlan(sequelize, DataTypes);
  var recipeTag = _recipeTag(sequelize, DataTypes);
  var recipe = _recipe(sequelize, DataTypes);
  var tag = _tag(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  recipe.belongsTo(user, { as: "user", foreignKey: "userId"});
  user.hasMany(recipe, { as: "recipes", foreignKey: "userId"});

  return {
    ingredient,
    mealPlan,
    recipe,
    recipeIngredient,
    recipeMealPlan,
    recipeTag,
    recipe,
    tag,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
