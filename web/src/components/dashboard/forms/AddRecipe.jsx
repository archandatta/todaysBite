import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import Top from '../../nav/Top';

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
});

const SignInPage = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const [inputs, setInputs] = useState({ title: '', description: '', prepTime: '', cookTime: '' });

	console.info(inputs);

	return (
		<>
			<Top />
			<Container className={classes.root} fluid="sm">
				<Row>
					<Col>
						<Form>
							<Form.Group className="mb-2" controlId="formBasicTitle">
								<Form.Label>{recipeForm.title}</Form.Label>
								<Form.Control
									type="title"
									placeholder={recipeForm.titlePlaceholder}
									onChange={(e) => setInputs((prev) => ({ ...prev, title: e.target.value }))}
								/>
							</Form.Group>

							<Form.Group className="mb-2" controlId="formBasicDescription">
								<Form.Label>{recipeForm.description}</Form.Label>
								<Form.Control
									type="description"
									placeholder={recipeForm.descriptionPlaceholder}
									onChange={(e) => setInputs((prev) => ({ ...prev, description: e.target.value }))}
								/>
							</Form.Group>

							<Form.Group className="mb-2" controlId="formBasicPrep">
								<Form.Label>{recipeForm.prepTime}</Form.Label>
								<Form.Control
									type="prepTime"
									placeholder={recipeForm.prepTimePlaceholder}
									onChange={(e) => setInputs((prev) => ({ ...prev, prepTime: e.target.value }))}
								/>
							</Form.Group>

							<Form.Group className="mb-2" controlId="formBasicCook">
								<Form.Label>{recipeForm.cookTime}</Form.Label>
								<Form.Control
									type="cookTime"
									placeholder={recipeForm.cookTimePlaceholder}
									onChange={(e) => setInputs((prev) => ({ ...prev, cookTime: e.target.value }))}
								/>
							</Form.Group>
							<Button variant="primary" onClick={() => navigate('/add-ingrediants')}>
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
