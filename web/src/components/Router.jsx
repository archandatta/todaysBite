import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import AddRecipe from './dashboard/forms/AddRecipe';
import AddIngrediants from './dashboard/forms/AddIngrediants';
import AddSteps from './dashboard/forms/AddSteps';
import SignInPage from './pages/SignInPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignInPage />} />
				{<Route path="/dashboard" element={<DashboardPage />} />}
				<Route path="/add" element={<AddRecipe />} />
				<Route path="/add-ingrediants" element={<AddIngrediants />} />
				<Route path="/add-steps" element={<AddSteps />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
