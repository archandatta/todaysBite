import axiosConfig from '../../axiosConfig';

const getRecipes = (userId) => {
	return axiosConfig.get(`recipe/${userId}`);
};

export { getRecipes };
