import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { useRecoilState } from 'recoil';

import { mealPlanState } from '../../../globals/atoms/meal-plan';
import { useEffect } from 'react';

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
		width: '400px',
	},
	card: {
		borderRadius: '1.5rem',
		width: '300px',
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
	link: {
		padding: '0',
		color: 'black',
	},
});

const MealPlanCard = ({ day, mealPlanData }) => {
	const classes = useStyles();
	const [mealPlan, setMealPlan] = useRecoilState(mealPlanState);

	useEffect(() => {
		const plans = { ...mealPlan };
		mealPlanData?.map((m) => (plans[m.day] = { ...plans[m.day], [m.course]: m.recipeName }));
		return setMealPlan(plans);
	}, [mealPlanData]);

	return (
		<Container className={classes.root}>
			<Card className={classes.card}>
				<Card.Body>
					<Card.Title className={classes.title}>{day}</Card.Title>
					<Card.Text className={classes.body}>
						Breakfast:
						<Button variant="link" className={classes.link}>
							{mealPlan[day]?.Breakfast}
						</Button>
					</Card.Text>
					<Card.Text className={classes.body}>
						Lunch:
						<Button variant="link" className={classes.link}>
							{mealPlan[day]?.Lunch}
						</Button>
					</Card.Text>
					<Card.Text className={classes.body}>
						Dinner:
						<Button variant="link" className={classes.link}>
							{mealPlan[day]?.Dinner}
						</Button>
					</Card.Text>
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
