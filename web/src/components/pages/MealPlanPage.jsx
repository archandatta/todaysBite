import React from 'react';

import MealPlans from '../dashboard/mealPlan/MealPlans';
import ColumnPage from './ColumnPage';

const MealPlanPage = () => {
	return <ColumnPage center={<MealPlans />} />;
};

export default MealPlanPage;
