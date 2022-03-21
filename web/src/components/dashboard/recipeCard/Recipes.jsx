import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { recipesState } from '../../../globals/atoms/recipes';

import { getRecipes } from '../../../util/rest/recipes';
import RecipeCard from './RecipeCard';

const Recipes = () => {
	const navigate = useNavigate();
	const userId = localStorage.getItem('userId');
	const setRecipes = useSetRecoilState(recipesState);

	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	const fetchData = async (userId) => {
		try {
			const recipes = await getRecipes(userId);
			setResponse(recipes.data);
			setRecipes(recipes.data);
			// console.info(recipes.data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (userId === null) {
			navigate('/');
		}
		fetchData(userId);
	}, [navigate, userId]);

	useEffect(() => {
		if (response !== null && !loading) {
		}
	}, [error, loading, response]);

	return (
		<>
			{response?.map((recipe, index) => (
				<RecipeCard key={index.toString()} recipeData={recipe} />
			))}
		</>
	);
};

export default Recipes;
