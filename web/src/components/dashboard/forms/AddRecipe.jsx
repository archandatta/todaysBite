import React from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

import Top from '../../nav/Top';
import { recipeIntputState } from '../../../globals/atoms/recipe-input';
import { useEffect } from 'react';

const recipeForm = {
	title: 'Enter Title',
	titlePlaceholder: 'title',
	description: 'Enter Description',
	descriptionPlaceholder: 'description',
	prepTime: 'Enter Prep Time',
	prepTimePlaceholder: 'prep time',
	cookTime: 'Enter Cook Time',
	cookTimePlaceholder: 'cook time',
	button: 'Add Ingrediants',
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
	formLabel: {
		marginTop: '1rem',
	},
	formBox: {
		height: '50px',
		borderRadius: '0.5rem',
	},
});

const SignInPage = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const userId = localStorage.getItem('userId');

	const setRecipeInputs = useSetRecoilState(recipeIntputState);

	useEffect(() => {
		setRecipeInputs((prev) => ({ ...prev, userId: userId }));
	}, [setRecipeInputs, userId]);

	return (
		<>
			<Top />
			<Container className={classes.root} fluid>
				<Card className={classes.card}>
					<Card.Body>
						<Card.Title className={classes.cardTitle}>Add Recipe</Card.Title>
					</Card.Body>
				</Card>
				<Row>
					<Col>
						<Form>
							<Form.Group className="mb-2" controlId="formBasicTitle">
								<Form.Label className={classes.formLabel}>{recipeForm.title}</Form.Label>
								<Form.Control
									className={classes.formBox}
									type="title"
									placeholder={recipeForm.titlePlaceholder}
									onChange={(e) => setRecipeInputs((prev) => ({ ...prev, title: e.target.value }))}
								/>
							</Form.Group>

							<Form.Group className="mb-2" controlId="formBasicDescription">
								<Form.Label className={classes.formLabel}>{recipeForm.description}</Form.Label>
								<Form.Control
									className={classes.formBox}
									type="description"
									placeholder={recipeForm.descriptionPlaceholder}
									onChange={(e) => setRecipeInputs((prev) => ({ ...prev, description: e.target.value }))}
								/>
							</Form.Group>

							<Form.Group className="mb-2" controlId="formBasicPrep">
								<Form.Label className={classes.formLabel}>{recipeForm.prepTime}</Form.Label>
								<Form.Control
									className={classes.formBox}
									type="prepTime"
									placeholder={recipeForm.prepTimePlaceholder}
									onChange={(e) => setRecipeInputs((prev) => ({ ...prev, prepTime: e.target.value }))}
								/>
							</Form.Group>

							<Form.Group className="mb-2" controlId="formBasicCook">
								<Form.Label className={classes.formLabel}>{recipeForm.cookTime}</Form.Label>
								<Form.Control
									className={classes.formBox}
									type="cookTime"
									placeholder={recipeForm.cookTimePlaceholder}
									onChange={(e) => setRecipeInputs((prev) => ({ ...prev, cookTime: e.target.value }))}
								/>
							</Form.Group>
							<Button className={classes.button} onClick={() => navigate('/add-ingrediants')}>
								{recipeForm.button}
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SignInPage;
