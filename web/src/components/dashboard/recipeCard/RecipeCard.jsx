import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import { Card, Button } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const recipeCard = {
	prepTime: 'Prep Time',
	cookTime: 'cook Time',
	seeIngredients: 'See Ingredients',
	seeSteps: 'See Steps',
};

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
		width: '600px',
	},
});

const RecipeCard = ({ recipeData }) => {
	const navigate = useNavigate();
	const classes = useStyles();
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
			<div className="CardFront">
				<div>
					<Card className={classes.root}>
						<Card.Body>
							<Card.Title>{recipeData.recipe.title}</Card.Title>
							<Card.Text>{recipeData.recipe.description}</Card.Text>
							<Card.Text>
								{recipeCard.prepTime} {recipeData.recipe.prepTime}
							</Card.Text>
							<Card.Text>
								{recipeCard.cookTime} {recipeData.recipe.cookTime}
							</Card.Text>
							<Button variant="primary" onClick={() => setIsFlipped((prev) => !prev)}>
								{recipeCard.seeIngredients}
							</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
			<div className="CardBack">
				<Card className={classes.root}>
					<Card.Body>
						<ul>
							{recipeData.ingredients.map((i, idx) => (
								<li key={idx.toString()}>{i !== null && i.name}</li>
							))}
						</ul>

						<Button variant="primary" onClick={() => navigate(`/recipe/${recipeData.recipe.id}`)}>
							{recipeCard.seeSteps}
						</Button>
					</Card.Body>
				</Card>
			</div>
		</ReactCardFlip>
	);
};

RecipeCard.defaultProps = {
	recipeData: null,
};

RecipeCard.propTypes = {
	recipeData: PropTypes.object,
};

export default RecipeCard;
