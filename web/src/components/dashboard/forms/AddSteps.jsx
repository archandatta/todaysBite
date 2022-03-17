import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import Top from '../../nav/Top';
import StepInput from './StepInput';
import { recipeIntputState } from '../../../globals/atoms/recipe-input';
import { ingrediantInputState } from '../../../globals/atoms/ingrediant-inputs';
import { createRecipe } from '../../../util/rest/recipes';

const stepsForm = {
	step: 'Enter Step Description',
	stepPlaceholder: 'step description',
	addButton: 'Add Step',
	nextButton: 'Next',
};

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
		width: '400px',
	},
});

const AddIngrediantsForm = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const [stepInputs, setInputs] = useState({ steps: [{ stepNum: 0, description: '' }] });

	const recipeInput = useRecoilValue(recipeIntputState);
	const ingrediantInputs = useRecoilValue(ingrediantInputState);

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
				<Row>
					<Col>
						<Form>
							{stepInputs.steps.map((val, index) => (
								<StepInput key={index.toString()} inputs={stepInputs} val={val} index={index} setInputs={setInputs} />
							))}
							<Button
								variant="primary"
								onClick={() => {
									setInputs((prev) => ({
										steps: [...prev.steps, { stepNum: 0, description: '' }],
									}));
								}}
							>
								{stepsForm.addButton}
							</Button>

							<Button
								variant="primary"
								onClick={() => {
									setInputs(stepInputs);
									fetchData(recipeData);
									// navigate('/dashboard');
								}}
							>
								{stepsForm.nextButton}
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AddIngrediantsForm;
