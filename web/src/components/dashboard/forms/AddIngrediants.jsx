import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { ingrediantInputState } from '../../../globals/atoms/ingrediant-inputs';
import IngrediantInput from './IngrediantInput';
import Top from '../../nav/Top';

const ingrediantForm = {
	addButton: 'Add Ingrediant',
	nextButton: 'Next',
};

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
		width: '400px',
	},
});

const AddIngrediants = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const [ingrediantInputs, setIngrediantInputs] = useRecoilState(ingrediantInputState);
	const [inputs, setInputs] = useState({ ingrediants: [{ name: '', unit: '', quantity: '' }] });

	console.info(inputs);
	console.info(ingrediantInputs);

	return (
		<>
			<Top />
			<Container className={classes.root} fluid="sm">
				<Row>
					<Col>
						<Form>
							{inputs.ingrediants.map((val, index) => (
								<IngrediantInput key={index.toString()} inputs={inputs} val={val} index={index} setInputs={setInputs} />
							))}
							<Button
								variant="primary"
								onClick={() => {
									setIngrediantInputs((prev) => ({
										ingrediants: [...prev.ingrediants, { name: '', unit: '', quantity: '' }],
									}));
								}}
							>
								{ingrediantForm.addButton}
							</Button>
							<Button
								variant="primary"
								onClick={() => {
									setIngrediantInputs(inputs);
									navigate('/add-steps');
								}}
							>
								{ingrediantForm.nextButton}
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default AddIngrediants;
