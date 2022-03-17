import axiosConfig from '../../axiosConfig';

const getRecipes = (userId) => {
	return axiosConfig.get(`recipe/${userId}`);
};

const createRecipe = (recipeData) => {
	return axiosConfig.post('/create-recipe', {
		data: recipeData,
	});
};

export { createRecipe, getRecipes };
