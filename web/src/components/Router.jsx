import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import AddRecipe from './dashboard/forms/AddRecipe';
import AddIngrediants from './dashboard/forms/AddIngrediants';
import AddSteps from './dashboard/forms/AddSteps';
import SignInPage from './pages/SignInPage';
import RecipePage from './pages/RecipePage';
import MealPlanPage from './pages/MealPlanPage';
import GroceryListPage from './pages/GroceryListPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignInPage />} />
				{<Route path="/dashboard" element={<DashboardPage />} />}
				<Route path="/add" element={<AddRecipe />} />
				<Route path="/add-ingrediants" element={<AddIngrediants />} />
				<Route path="/add-steps" element={<AddSteps />} />
				<Route path="/recipe/:id" element={<RecipePage />} />
				<Route path="/meal-plan" element={<MealPlanPage />} />
				<Route path="/grocery-list" element={<GroceryListPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
