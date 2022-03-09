import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import AddRecipeForm from './dashboard/AddRecipeForm';
import AddIngrediantsForm from './dashboard/AddIngrediantsForm';
import AddSteps from './dashboard/AddSteps';
import SignInPage from './pages/SignInPage';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignInPage />} />
				{<Route path="/dashboard" element={<DashboardPage />} />}
				<Route path="/add" element={<AddRecipeForm />} />
				<Route path="/add-ingrediants" element={<AddIngrediantsForm />} />
				<Route path="/add-steps" element={<AddSteps />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
