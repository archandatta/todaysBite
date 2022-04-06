import React, { useState } from 'react';
import { Button, Card, Col, Container, Stack, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';

const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
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
	},
	stack: {
		marginLeft: '4rem',
	},
});

const MealPlan = ({ recipeId }) => {
	const classes = useStyles();
	const [day, setDay] = useState('Day');
	const [course, setCourse] = useState('Course');

	// each button rely on the same state variable
	// when false the button should be disabled
	// the meal plan will always be for the next week
	// the state needs to be gobal to ensure all the recipes
	// are showing the right state
	// use an object to control the state i.e. (Monday: false)

	return (
		<Container className={classes.root} fluid>
			<Card className={classes.headerCard}>
				<Card.Title className={classes.title}>Meal Plan</Card.Title>
				<Card.Body>
					<Stack className={classes.stack} direction="horizontal">
						<InputGroup>
							<DropdownButton variant="outline-secondary" title={day} id="input-group-dropdown-1">
								<Dropdown.Item href="#" onClick={(e) => setDay('Monday')}>
									Monday
								</Dropdown.Item>
								<Dropdown.Item href="#">Another action</Dropdown.Item>
								<Dropdown.Item href="#">Something else here</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item href="#">Separated link</Dropdown.Item>
							</DropdownButton>
						</InputGroup>
						<InputGroup>
							<DropdownButton variant="outline-secondary" title={course} id="input-group-dropdown-1">
								<Dropdown.Item href="#" onClick={(e) => setCourse('Breakfast')}>
									Breakfast
								</Dropdown.Item>
								<Dropdown.Item href="#">Lunch</Dropdown.Item>
								<Dropdown.Item href="#">Dinner</Dropdown.Item>
							</DropdownButton>
						</InputGroup>
					</Stack>
					<Card.Text>Monday:</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default MealPlan;
