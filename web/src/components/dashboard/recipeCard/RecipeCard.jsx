import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const RecipeCard = ({ recipeData }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{recipeData.recipe.title}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

RecipeCard.defaultProps = {
	recipeData: null,
};

RecipeCard.propTypes = {
	recipeData: PropTypes.object,
};

export default RecipeCard;
