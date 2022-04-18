import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { useRecoilState, useRecoilValue } from 'recoil';

import { Button, Card, Container, Stack, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { recipesState } from '../../../globals/atoms/recipes';
import { mealPlanState } from '../../../globals/atoms/meal-plan';
import { createMealPlan, getMealPlan } from '../../../util/rest/mealPlan';
import { useMemo } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const courses = ['Breakfast', 'Lunch', 'Dinner'];

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
		width: '400px',
	},
	headerCard: {
		width: '400px',
		borderRadius: '2rem',
	},
	title: {
		marginTop: '1rem',
		display: 'flex',
		marginLeft: '2rem',
	},
	button: {
		width: '100%',
		color: 'white',
		borderRadius: '0.5rem',
	},
});

const MealPlan = ({ recipeId }) => {
	const classes = useStyles();
	const userId = localStorage.getItem('userId');

	const [mealPlan, setMealPlan] = useRecoilState(mealPlanState);

	const [day, setDay] = useState('Day');
	const [currDay, setCurrDay] = useState('Day');
	const [course, setCourse] = useState('Course');
	const [response, setResponse] = useState(null);

	const recipes = useRecoilValue(recipesState);
	const recipeData = recipes?.filter((r) => r.recipe.id === recipeId)[0];

	const mealPlanData = useMemo(
		() => ({
			day,
			recipeData: mealPlan[day][course],
			course,
			userId: userId,
		}),
		[course, day, mealPlan, userId]
	);

	const createMealPlan = async (mealPlanData) => {
		try {
			await createMealPlan(mealPlanData);
		} catch (e) {
			console.info(e);
		}
	};

	const fetchData = async (userId) => {
		try {
			const mealPlans = await getMealPlan(userId);
			setResponse(mealPlans.data);
		} catch (e) {
			console.info(e);
		}
	};

	const p = useMemo(() => {
		const plans = { ...mealPlan };
		response?.map((m) => (plans[m.day] = { ...plans[m.day], [m.course]: m.recipeName }));
		return plans;
	}, [response]);

	useEffect(() => {
		fetchData(userId);
	}, [userId]);

	console.info(p[currDay].Breakfast);

	return (
		<Container className={classes.root} fluid>
			<Card className={classes.headerCard}>
				<Card.Title className={classes.title}>Meal Plan</Card.Title>
				<Card.Body>
					<Stack direction="horizontal" gap={2}>
						<InputGroup>
							<Stack direction="horizontal" gap={2}>
								<DropdownButton variant="outline-secondary" title={day} id="input-group-dropdown-1">
									{days.map((day) => (
										<Dropdown.Item key={day} onClick={(e) => setDay(e.target.innerText)}>
											{day}
										</Dropdown.Item>
									))}
								</DropdownButton>
								<DropdownButton variant="outline-secondary" title={course} id="input-group-dropdown-1">
									{courses.map((course) => (
										<Dropdown.Item key={course} onClick={(e) => setCourse(e.target.innerText)}>
											{course}
										</Dropdown.Item>
									))}
								</DropdownButton>
							</Stack>
						</InputGroup>
						<Button
							className={classes.button}
							onClick={() => {
								const plan = { ...mealPlan };
								plan[day] = { ...plan[day], [course]: recipeData.recipe };
								setMealPlan(plan);
								createMealPlan(mealPlanData);
							}}
						>
							Set Meal
						</Button>
					</Stack>
					<Card.Title className={classes.title}>Current Meals</Card.Title>
					<DropdownButton variant="outline-secondary" title={currDay} id="input-group-dropdown-1">
						{days.map((day) => (
							<Dropdown.Item key={day} onClick={(e) => setCurrDay(e.target.innerText)}>
								{day}
							</Dropdown.Item>
						))}
					</DropdownButton>
					<p>Breakfast: {p[currDay].Breakfast}</p>
					<p>Lunch: {p[currDay].Lunch.title}</p>
					<p>Dinner: {p[currDay].Dinner.title}</p>
				</Card.Body>
			</Card>
		</Container>
	);
};

MealPlan.defaultProps = {
	recipeId: '',
};

MealPlan.propTypes = {
	setInputs: PropTypes.string,
};

export default MealPlan;
