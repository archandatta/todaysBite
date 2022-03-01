import axiosConfig from '../../axiosConfig';

const getRecipes = (userId) => {
	return axiosConfig.get(`recipe/U1`);
};

export { getRecipes };
