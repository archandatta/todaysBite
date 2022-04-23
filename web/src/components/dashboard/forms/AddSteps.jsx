import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

import Top from '../../nav/Top';
import StepInput from './StepInput';
import { recipeIntputState } from '../../../globals/atoms/recipe-input';
import { ingrediantInputState } from '../../../globals/atoms/ingrediant-inputs';
import { createRecipe } from '../../../util/rest/recipes';
import Forward from '../../icons/Forward';
import { recipesState } from '../../../globals/atoms/recipes';

const stepsForm = {
	step: 'Enter Step Description',
	stepPlaceholder: 'step description',
	addButton: 'Add Step',
	nextButton: 'Add Recipe',
};

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
		width: '400px',
	},
	card: {
		borderRadius: '1rem',
		borderColor: '#E87121',
		marginBottom: '1rem',
	},
	cardTitle: {
		fontWeight: '600',
		fontSize: '24px',
	},
	button: {
		marginTop: '1rem',
		borderRadius: '0.5rem',
		color: 'white',
	},
	nextButton: {
		marginLeft: '9rem',
		marginTop: '1rem',
		borderRadius: '0.5rem',
		color: 'white',
	},
});

const AddIngrediantsForm = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const [stepInputs, setInputs] = useState({ steps: [{ stepNum: 0, description: '' }] });

	const recipeInput = useRecoilValue(recipeIntputState);
	const ingrediantInputs = useRecoilValue(ingrediantInputState);
	const setRecipes = useSetRecoilState(recipesState);

	const recipeData = {
		recipeInput,
		ingrediantInputs,
		stepInputs,
	};

	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	const fetchData = async (recipeData) => {
		try {
			const user = await createRecipe(recipeData);
			console.info(user);
			localStorage.setItem('userId', 'U1');
			// localStorage.setItem('userId', user.data.id);
			setResponse(user.data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (response !== null && !loading) {
			// push to dashboard with user id
			navigate('/dashboard');
		}
	}, [error, navigate, loading, response]);

	return (
		<>
			<Top />
			<Container className={classes.root} fluid="sm">
				<Card className={classes.card}>
					<Card.Body>
						<Card.Title className={classes.cardTitle}>Add Steps</Card.Title>
					</Card.Body>
				</Card>{' '}
				<Row>
					<Col>
						<Form>
							{stepInputs.steps.map((val, index) => (
								<StepInput key={index.toString()} inputs={stepInputs} val={val} index={index} setInputs={setInputs} />
							))}
							<Button
								className={classes.button}
								onClick={() => {
									setInputs((prev) => ({
										steps: [...prev.steps, { stepNum: 0, description: '' }],
									}));
								}}
							>
								{stepsForm.addButton}
							</Button>

							<Button
								className={classes.nextButton}
								onClick={() => {
									setInputs(stepInputs);
									fetchData(recipeData);
									setRecipes((prev) => [...prev, recipeData]);
									navigate('/dashboard');
								}}
							>
								{stepsForm.nextButton} <Forward />
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AddIngrediantsForm;
