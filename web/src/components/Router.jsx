import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';

const About = () => <span>{console.info('about')}</span>;

const Router = () => (
	<MemoryRouter>
		<Routes>
			<Route path="/" element={<DashboardPage />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</MemoryRouter>
);

export default Router;
