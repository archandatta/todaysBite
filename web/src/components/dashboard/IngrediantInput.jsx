import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const recipeForm = {
	name: 'Enter name',
	namePlaceholder: 'name',
	unit: 'Enter Unit',
	unitPlaceholder: 'unit',
	quantity: 'Enter Quantity',
	quantityPlaceholder: 'quantity',
	button: 'Add Ingrediants',
};

const IngrediantInput = ({ inputs, val, index, setInputs }) => {
	return (
		<>
			<Form.Group className={`mb-${index}`}>
				<Form.Label>{recipeForm.name}</Form.Label>
				<Form.Control
					placeholder={recipeForm.namePlaceholder}
					onChange={(e) => {
						const { value } = e.target;
						const ingrediants = [...inputs?.ingrediants];
						ingrediants[index] = { ...ingrediants[index], name: value };
						setInputs({ ingrediants });
					}}
				/>
			</Form.Group>

			<Form.Group className={`mb-${index}`}>
				<Form.Label>{recipeForm.quantity}</Form.Label>
				<Form.Control
					placeholder={recipeForm.quantityPlaceholder}
					onChange={(e) => {
						const { value } = e.target;
						const ingrediants = [...inputs?.ingrediants];
						ingrediants[index] = { ...ingrediants[index], quantity: value };
						setInputs({ ingrediants });
					}}
				/>
			</Form.Group>

			<Form.Group className={`mb-${index}`}>
				<Form.Label>{recipeForm.unit}</Form.Label>
				<Form.Control
					placeholder={recipeForm.unitPlaceholder}
					onChange={(e) => {
						const { value } = e.target;
						const ingrediants = [...inputs?.ingrediants];
						ingrediants[index] = { ...ingrediants[index], unit: value };
						setInputs({ ingrediants });
					}}
				/>
			</Form.Group>
		</>
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
