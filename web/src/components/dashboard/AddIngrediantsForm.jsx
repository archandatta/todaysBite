import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import Top from '../nav/Top';
import { ingrediantInputState } from '../../globals/atoms/ingrediant-inputs';
import IngrediantInput from './IngrediantInput';

const recipeForm = {
	name: 'Enter name',
	namePlaceholder: 'name',
	unit: 'Enter Unit',
	unitPlaceholder: 'unit',
	quantity: 'Enter Quantity',
	quantityPlaceholder: 'quantity',
	addButton: 'Add Ingrediant',
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

	const [ingrediantInputs, setIngrediantInputs] = useRecoilState(ingrediantInputState);
	const [inputs, setInputs] = useState({ ingrediants: [{ name: '', unit: '', quantity: '' }] });

	// console.info(inputs);
	// console.info(ingrediantInputs);

	return (
		<>
			<Top />
			<Container className={classes.root} fluid="sm">
				<Row>
					<Col>
						<Form>
							{inputs.ingrediants.map((val, index) => (
								<IngrediantInput
									key={index.toString()}
									inputs={ingrediantInputs}
									val={val}
									index={index}
									setInputs={setInputs}
								/>
							))}
							<Button
								variant="primary"
								onClick={() => {
									setIngrediantInputs(inputs);
									setIngrediantInputs((prev) => ({
										ingrediants: [...prev.ingrediants, { name: '', unit: '', quantity: '' }],
									}));
								}}
							>
								{recipeForm.addButton}
							</Button>

							<Button variant="primary" onClick={() => navigate('/add-steps')}>
								{recipeForm.nextButton}
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AddIngrediantsForm;
