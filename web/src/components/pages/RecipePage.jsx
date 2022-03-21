import React from 'react';
import { useParams } from 'react-router-dom';

import FullRecipe from '../dashboard/recipeCard/FullRecipe';
import ColumnPage from './ColumnPage';

const RecipePage = () => {
	const { id } = useParams();

	return <ColumnPage center={<FullRecipe recipeId={id}/>} />;
};

export default RecipePage;
