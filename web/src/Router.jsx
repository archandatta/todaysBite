import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ColumnPage from './components/pages/ColumnPage';

const About = () => <span>{console.info('about')}</span>;

const Router = () => (
	<MemoryRouter>
		<Routes>
			<Route path="/" element={<ColumnPage />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</MemoryRouter>
);

export default Router;
