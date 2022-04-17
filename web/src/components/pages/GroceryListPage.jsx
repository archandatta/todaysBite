import React from 'react';

import ColumnPage from './ColumnPage';
import GroceryList from '../dashboard/mealPlan/GroceryList';

const RecipePage = () => {
	return <ColumnPage center={<GroceryList />} />;
};

export default RecipePage;
