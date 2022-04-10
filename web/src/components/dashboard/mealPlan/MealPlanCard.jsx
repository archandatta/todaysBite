import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { useRecoilState } from 'recoil';

import { mealPlanState } from '../../../globals/atoms/meal-plan';
import { useEffect } from 'react';

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
		width: '200px',
	},
	card: {
		borderRadius: '1.5rem',
		width: '200px',
	},
	title: {
		fontWeight: '600',
		fontSize: '30px',
		display: 'flex',
	},
	body: {
		paddingTop: '1rem',
		fontWeight: '500',
		fontSize: '20px',
		display: 'flex',
	},
});

const MealPlanCard = ({ day, mealPlanData }) => {
	const classes = useStyles();
	const [mealPlan, setMealPlan] = useRecoilState(mealPlanState);

	useEffect(() => {
		const plans = { ...mealPlan };
		mealPlanData?.map((m) => (plans[m.day] = { ...plans[m.day], [m.course]: m.recipeId }));
		return setMealPlan(plans);
	}, [mealPlanData]);

	return (
		<Container className={classes.root}>
			<Card className={classes.card}>
				<Card.Body>
					<Card.Title className={classes.title}>{day}</Card.Title>
					<Card.Text className={classes.body}>Breakfast: {mealPlan[day]?.Breakfast}</Card.Text>
					<Card.Text className={classes.body}>Lunch: {mealPlan[day]?.Lunch}</Card.Text>
					<Card.Text className={classes.body}>Dinner: {mealPlan[day]?.Dinner}</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};

MealPlanCard.defaultProps = {
	day: '',
	data: null,
};

MealPlanCard.propTypes = {
	day: PropTypes.string,
	data: PropTypes.object,
};

export default MealPlanCard;
