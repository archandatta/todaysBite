import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import { Card, Button } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const recipeCard = {
	prepTime: 'Prep Time: ',
	cookTime: ' Cook Time: ',
	seeIngredients: 'See Ingredients',
	seeSteps: 'See Steps',
};

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
		width: '400px',
		height: '300px',
		borderRadius: '1.5rem',
	},
	backCard: {
		marginTop: '2rem',
		width: '400px',
		borderRadius: '1.5rem',
	},
	title: {
		position: 'absolute',
		height: '32px',
		left: '16px',
		right: '16px',
		top: '16px',

		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '24px',
		lineHeight: '29px',
		display: 'flex',
		alignItems: 'left',
	},
	body: {
		position: 'absolute',
		left: '16px',
		right: '16px',
		top: '90px',
		bottom: '64px',

		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '20px',
	},
	text: {
		position: 'absolute',
		left: '16px',
		right: '16px',
		top: '150px',
		bottom: '64px',

		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '20px',
	},
	button: {
		position: 'absolute',
		height: '40px',
		right: '16px',
		bottom: '16px',
		borderRadius: '0.5rem',
	},
	backButton: {
		position: 'absolute',
		width: '40px',
		height: '40px',
		right: '8px',
		top: '16px',
	},
});

const RecipeCard = ({ recipeData }) => {
	const navigate = useNavigate();
	const classes = useStyles();
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
			<Card className={classes.root}>
				<Card.Body>
					<Card.Title className={classes.title}>{recipeData.recipe.title}</Card.Title>
					<Card.Text className={classes.body}>{recipeData.recipe.description}</Card.Text>
					<Card.Text className={classes.text}>
						{recipeCard.prepTime} {recipeData.recipe.prepTime}
						{recipeCard.cookTime} {recipeData.recipe.cookTime}
					</Card.Text>
					<Button className={classes.button} variant="primary" onClick={() => setIsFlipped((prev) => !prev)}>
						{recipeCard.seeIngredients}
					</Button>
				</Card.Body>
			</Card>
			<div className="CardBack">
				<Card className={classes.backCard}>
					<Card.Body>
						<Button className={classes.backButton} onClick={() => setIsFlipped((prev) => !prev)}>
							back
						</Button>
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
