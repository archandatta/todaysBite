import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const stepsForm = {
	step: 'Enter Step Description',
	stepPlaceholder: 'step description',
};

const StepInput = ({ inputs, val, index, setInputs }) => {
	return (
		<>
			<Form.Group className={`mb-${index}`}>
				<Form.Label>
					{stepsForm.step} {index}
				</Form.Label>
				<Form.Control
					placeholder={stepsForm.stepPlaceholder}
					onChange={(e) => {
						const { value } = e.target;
						const steps = [...inputs?.steps];
						steps[index] = { ...steps[index], stepNum: index, description: value };
						setInputs({ steps });
					}}
				/>
			</Form.Group>
		</>
	);
};

StepInput.defaultProps = {
	inputs: {},
	val: {},
	index: 0,
	setInputs: null,
};

StepInput.propTypes = {
	inputs: PropTypes.object,
	val: PropTypes.object,
	index: PropTypes.number,
	setInputs: PropTypes.func,
};

export default StepInput;
