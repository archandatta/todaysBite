import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import Back from '../../icons/Back';

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
		fontWeight: '600',
		fontSize: '30px',
		display: 'flex',
	},
	body: {
		paddingTop: '1rem',
		fontWeight: '500',
		fontSize: '20px',
		display: 'flex',
	},
	text: {
		paddingTop: '0.5rem',
		fontWeight: '400',
		fontSize: '18px',
		display: 'flex',
	},
	button: {
		position: 'absolute',
		height: '40px',
		right: '16px',
		bottom: '16px',
		borderRadius: '0.5rem',
		color: 'white',
	},
	stepsButton: {
		marginTop: '1rem',
		borderRadius: '0.5rem',
		color: 'white',
	},
	backButton: {
		paddingLeft: '0',
		display: 'flex',
	},
	list: {
		display: 'flex',
		paddingLeft: '0',
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
					<Card.Title className={classes.title}>{recipeData.recipe?.title}</Card.Title>
					<Card.Text className={classes.body}>{recipeData.recipe?.description}</Card.Text>
					<Card.Text className={classes.text}>
						{recipeCard.prepTime} {recipeData.recipe?.prepTime}
						{recipeCard.cookTime} {recipeData.recipe?.cookTime}
					</Card.Text>
					<Button className={classes.button} variant="primary" onClick={() => setIsFlipped((prev) => !prev)}>
						{recipeCard.seeIngredients}
					</Button>
				</Card.Body>
			</Card>
			<div className="CardBack">
				<Card className={classes.backCard}>
					<Card.Body>
						<Button variant="link" className={classes.backButton} onClick={() => setIsFlipped((prev) => !prev)}>
							<Back />
						</Button>
						<h2 className="d-flex justify-content-start">Ingredients</h2>
						<ListGroup variant="flush">
							{recipeData.ingredients.map(
								(i, idx) =>
									i !== null && (
										<ListGroup.Item className={classes.list} key={idx.toString()} as="li">
											<div className="ms-2 me-auto">
												<div>{i.name}</div>
											</div>
											{i.quantity} {i.unit}
										</ListGroup.Item>
									)
							)}
						</ListGroup>
						<Button className={classes.stepsButton} onClick={() => navigate(`/recipe/${recipeData.recipe.id}`)}>
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
