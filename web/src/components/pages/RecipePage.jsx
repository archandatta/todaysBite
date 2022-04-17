import React from 'react';
import { useParams } from 'react-router-dom';

import FullRecipe from '../dashboard/recipeCard/FullRecipe';
import MealPlan from '../dashboard/mealPlan/MealPlan';
import ColumnPage from './ColumnPage';

const RecipePage = () => {
	const { id } = useParams();

	return <ColumnPage center={<FullRecipe recipeId={id} />} right={<MealPlan recipeId={id} />} />;
};

export default RecipePage;
