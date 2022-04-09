import axiosConfig from '../../axiosConfig';

// const getRecipes = (userId) => {
// 	return axiosConfig.get(`recipe/${userId}`);
// };

const createMealPlan = (mealPlanData) => {
	return axiosConfig.post('/create-meal-plan', {
		data: mealPlanData,
	});
};

export { createMealPlan };
