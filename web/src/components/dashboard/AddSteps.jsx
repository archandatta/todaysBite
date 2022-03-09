import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import Top from '../nav/Top';
import { stepIntputState } from '../../globals/atoms/step-inputs';
import StepInput from './StepInput';

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

	const [stepInputs, setStepInputs] = useRecoilState(stepIntputState);
	const [inputs, setInputs] = useState({ steps: [{ stepNum: 0, description: '' }] });

	// console.info(inputs);
	// console.info(stepInputs);

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
									setStepInputs(inputs);
									setStepInputs((prev) => ({
										steps: [...prev.steps, { stepNum: 0, description: '' }],
									}));
								}}
							>
								{stepsForm.addButton}
							</Button>

							<Button variant="primary" onClick={() => navigate('/add-steps')}>
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
