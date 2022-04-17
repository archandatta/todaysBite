import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../icons/logo.png';

const Top = () => {
	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand href="/dashboard">
					<img alt="logo" src={logo} width="120" height="60" className="d-inline-block align-top" />
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/dashboard">Dashboard</Nav.Link>
					<Nav.Link href="/add">Add Recipe</Nav.Link>
					<Nav.Link href="/meal-plan">Meal Plan</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Top;
