import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Col, Container, Row } from 'react-bootstrap';

import MealPlanCard from './MealPlanCard';
import { useState } from 'react';
import { getMealPlan } from '../../../util/rest/mealPlan';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
	},
	button: {
		marginTop: '2rem',
		width: '200px',
		color: 'white',
		borderRadius: '0.5rem',
	},
});

const Recipes = () => {
	const classes = useStyles();
	const userId = localStorage.getItem('userId');

	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	const fetchData = async (userId) => {
		try {
			const mealPlans = await getMealPlan(userId);
			console.info(mealPlans);
			setResponse(mealPlans.data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (response !== null && !loading) {
			// push to dashboard with user id
		}
	}, [error, loading, response]);

	useEffect(() => {
		fetchData(userId);
	}, [userId]);

	return (
		<Container className={classes.root} fluid>
			<Row>
				{days?.map((day, index) => (
					<Col key={index.toString()}>
						<MealPlanCard key={index.toString()} day={day} mealPlanData={response} />
					</Col>
				))}
			</Row>
			<Button href="/grocery-list" className={classes.button}>
				Ingredients
			</Button>
		</Container>
	);
};

export default Recipes;
