function createRecipe(recipeData) {
	const [recipe] = await models.recipe.findOrCreate({
		where: { title: title },
		defaults: {
			userId: recipeData.userID,
			title: recipeData.title,
			description: recipeData.description,
			prepTime: recipeData.prepTime,
			cookTime: recipeData.cookTime,
		},
	});
	return { recipe };
}

module.exports = createRecipe;
module.exports.createRecipe = createRecipe;
module.exports.default = createRecipe;
