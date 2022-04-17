import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

import { Form } from 'react-bootstrap';

const stepsForm = {
	step: 'Enter Description for Step',
	stepPlaceholder: 'step description',
};

const useStyles = makeStyles({
	formLabel: {
		marginTop: '1rem',
	},
	formBox: {
		height: '50px',
		borderRadius: '0.5rem',
	},
});

const StepInput = ({ inputs, val, index, setInputs }) => {
	const classes = useStyles();

	return (
		<>
			<Form.Group className={`mb-${index}`}>
				<Form.Label className={classes.formLabel}>
					{stepsForm.step} {index + 1}
				</Form.Label>
				<Form.Control
					className={classes.formBox}
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
