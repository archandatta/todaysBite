import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

const ROUTES = {
	BASE: '/',
	DASHBOARD: '/dash',
};

const Router = () => {
	return (
		<BrowserRouter basename={ROUTES.BASE}>
			<Route exact path={ROUTES.DASHBOARD}>
				{/* <Component /> */}
			</Route>
		</BrowserRouter>
	);
};

export default Router;
