var DataTypes = require("sequelize").DataTypes;
var _sequelizeMetum = require("./sequelizeMetum");
var _ingredient = require("./ingredient");
var _mealPlan = require("./mealPlan");
var _recipe = require("./recipe");
var _recipeIngredient = require("./recipeIngredient");
var _recipeMealPlan = require("./recipeMealPlan");
var _recipeTag = require("./recipeTag");
var _tag = require("./tag");
var _user = require("./user");

function initModels(sequelize) {
  var sequelizeMetum = _sequelizeMetum(sequelize, DataTypes);
  var ingredient = _ingredient(sequelize, DataTypes);
  var mealPlan = _mealPlan(sequelize, DataTypes);
  var recipe = _recipe(sequelize, DataTypes);
  var recipeIngredient = _recipeIngredient(sequelize, DataTypes);
  var recipeMealPlan = _recipeMealPlan(sequelize, DataTypes);
  var recipeTag = _recipeTag(sequelize, DataTypes);
  var tag = _tag(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  recipeIngredient.belongsTo(ingredient, { as: "ingredient", foreignKey: "ingredientId"});
  ingredient.hasMany(recipeIngredient, { as: "recipeIngredients", foreignKey: "ingredientId"});
  recipeMealPlan.belongsTo(mealPlan, { as: "meal", foreignKey: "mealId"});
  mealPlan.hasMany(recipeMealPlan, { as: "recipeMealPlans", foreignKey: "mealId"});
  recipeIngredient.belongsTo(recipe, { as: "recipe", foreignKey: "recipeId"});
  recipe.hasMany(recipeIngredient, { as: "recipeIngredients", foreignKey: "recipeId"});
  recipeMealPlan.belongsTo(recipe, { as: "recipe", foreignKey: "recipeId"});
  recipe.hasMany(recipeMealPlan, { as: "recipeMealPlans", foreignKey: "recipeId"});
  recipeTag.belongsTo(recipe, { as: "recipe", foreignKey: "recipeId"});
  recipe.hasMany(recipeTag, { as: "recipeTags", foreignKey: "recipeId"});
  recipeTag.belongsTo(tag, { as: "tag", foreignKey: "tagId"});
  tag.hasMany(recipeTag, { as: "recipeTags", foreignKey: "tagId"});
  recipe.belongsTo(user, { as: "user", foreignKey: "userId"});
  user.hasMany(recipe, { as: "recipes", foreignKey: "userId"});

  return {
    sequelizeMetum,
    ingredient,
    mealPlan,
    recipe,
    recipeIngredient,
    recipeMealPlan,
    recipeTag,
    tag,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
