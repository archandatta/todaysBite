import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

import { Form, Stack } from 'react-bootstrap';

const recipeForm = {
	name: 'Enter name',
	namePlaceholder: 'name',
	unit: 'Enter Unit',
	unitPlaceholder: 'unit',
	quantity: 'Enter Quantity',
	quantityPlaceholder: 'quantity',
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

const IngrediantInput = ({ inputs, val, index, setInputs }) => {
	const classes = useStyles();

	return (
		<Stack direction='horizontal' gap={4}>
			<Form.Group className={`mb-${index}`} controlId="formBasicName">
				<Form.Label className={classes.formLabel}>{recipeForm.name}</Form.Label>
				<Form.Control
					className={classes.formBox}
					placeholder={recipeForm.namePlaceholder}
					onChange={(e) => {
						const { value } = e.target;
						const ingrediants = [...inputs.ingrediants];
						ingrediants[index] = { ...ingrediants[index], name: value };
						setInputs({ ingrediants });
					}}
				/>
			</Form.Group>

			<Form.Group className={`mb-${index}`} controlId="formBasicQuantity">
				<Form.Label className={classes.formLabel}>{recipeForm.quantity}</Form.Label>
				<Form.Control
					className={classes.formBox}
					placeholder={recipeForm.quantityPlaceholder}
					onChange={(e) => {
						const { value } = e.target;
						const ingrediants = [...inputs?.ingrediants];
						ingrediants[index] = { ...ingrediants[index], quantity: value };
						setInputs({ ingrediants });
						console.info(value, ingrediants);
					}}
				/>
			</Form.Group>

			<Form.Group className={`mb-${index}`} controlId="formBasicUnit">
				<Form.Label className={classes.formLabel}>{recipeForm.unit}</Form.Label>
				<Form.Control
					className={classes.formBox}
					placeholder={recipeForm.unitPlaceholder}
					onChange={(e) => {
						const { value } = e.target;
						const ingrediants = [...inputs?.ingrediants];
						ingrediants[index] = { ...ingrediants[index], unit: value };
						setInputs({ ingrediants });
					}}
				/>
			</Form.Group>
		</ Stack>
	);
};

IngrediantInput.defaultProps = {
	inputs: {},
	val: {},
	index: 0,
	setInputs: null,
};

IngrediantInput.propTypes = {
	inputs: PropTypes.object,
	val: PropTypes.object,
	index: PropTypes.number,
	setInputs: PropTypes.func,
};

export default IngrediantInput;
