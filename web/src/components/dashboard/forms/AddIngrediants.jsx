import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

import { ingrediantInputState } from '../../../globals/atoms/ingrediant-inputs';
import IngrediantInput from './IngrediantInput';
import Top from '../../nav/Top';
import Forward from '../../icons/Forward';

const ingrediantForm = {
	addButton: 'Add Ingrediant',
	nextButton: 'Next',
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
		marginLeft: '12rem',
		marginTop: '1rem',
		border: '2px solid grey',
		borderRadius: '3rem',
	},
});

const AddIngrediants = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const setIngrediantInputs = useSetRecoilState(ingrediantInputState);
	const [inputs, setInputs] = useState({ ingrediants: [{ name: '', unit: '', quantity: '' }] });

	return (
		<>
			<Top />
			<Container className={classes.root} fluid="sm">
				<Card className={classes.card}>
					<Card.Body>
						<Card.Title className={classes.cardTitle}>Add Ingredients</Card.Title>
					</Card.Body>
				</Card>
				<Row>
					<Col>
						<Form>
							{inputs.ingrediants.map((val, index) => (
								<IngrediantInput key={index.toString()} inputs={inputs} val={val} index={index} setInputs={setInputs} />
							))}
							<Button
								className={classes.button}
								variant="primary"
								onClick={() => {
									setInputs((prev) => ({
										ingrediants: [...prev.ingrediants, { name: '', unit: '', quantity: '' }],
									}));
								}}
							>
								{ingrediantForm.addButton}
							</Button>
							<Button
								className={classes.nextButton}
								variant="link"
								onClick={() => {
									setIngrediantInputs(inputs);
									navigate('/add-steps');
								}}
							>
								<Forward />
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AddIngrediants;
