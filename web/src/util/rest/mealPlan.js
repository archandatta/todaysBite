import axiosConfig from '../../axiosConfig';

const getMealPlan = (userId) => {
	return axiosConfig.get(`meal-plan/${userId}`);
};

const getGroceryList = (userId) => {
	return axiosConfig.get(`get-ingredients/${userId}`);
};

const createMealPlan = (mealPlanData) => {
	return axiosConfig.post('/create-meal-plan', {
		data: mealPlanData,
	});
};

export { createMealPlan, getMealPlan, getGroceryList };
