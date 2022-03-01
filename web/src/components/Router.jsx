import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import SignInPage from './pages/SignInPage';

const About = () => <span>{console.info('about')}</span>;

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignInPage />} />
				{<Route path="/dashboard" element={<DashboardPage />} />}
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
