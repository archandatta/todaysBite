import React, { useState } from 'react';
import { Button, Card, Col, Container, Stack, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { useRecoilValue } from 'recoil';
import { recipesState } from '../../../globals/atoms/recipes';
import { useEffect } from 'react';

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
	},
});

const MealPlan = ({ recipeId }) => {
	const classes = useStyles();
	const [mealPlan, setMealPlan] = useState({
		Monday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Tuesday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Wednesday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Thrusday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Friday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Saturday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
		Sunday: {
			Breakfast: 'na',
			Lunch: 'na',
			Dinner: 'na',
		},
	});

	const [day, setDay] = useState('Day');
	const [currDay, setCurrDay] = useState('Day');
	const [course, setCourse] = useState('Course');

	const recipes = useRecoilValue(recipesState);
	const recipeData = recipes?.filter((r) => r.recipe.id === recipeId)[0];

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
								const plan = mealPlan;
								plan[day] = { ...plan[day], [course]: recipeData.recipe.title };
								setMealPlan(plan);
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
					<Card.Text>Breakfast: {mealPlan[currDay]?.Breakfast}</Card.Text>
					<Card.Text>Lunch: {mealPlan[currDay]?.Lunch}</Card.Text>
					<Card.Text>Dinner: {mealPlan[currDay]?.Dinner}</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default MealPlan;
