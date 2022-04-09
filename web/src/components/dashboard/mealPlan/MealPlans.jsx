import React from 'react';
import { makeStyles } from '@mui/styles';
import { Col, Container, Row } from 'react-bootstrap';

import MealPlanCard from './MealPlanCard';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
	},
});

const Recipes = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root} fluid>
			<Row>
				{days?.map((day, index) => (
					<Col key={index.toString()}>
						<MealPlanCard key={index.toString()} day={day} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Recipes;
