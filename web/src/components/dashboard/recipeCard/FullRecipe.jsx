import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { useRecoilValue } from 'recoil';
import { Card, ListGroup, Col, Stack, Row, Badge } from 'react-bootstrap';

import { recipesState } from '../../../globals/atoms/recipes';

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
	},
	card: {
		width: '800px',
		height: '200px',
		borderRadius: '2rem',
	},
	cardTitle: {
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '36px',
	},
	ingredientTitle: {
		display: 'flex',
		width: '400px',
		justifyContent: 'between',
	},
	ingredientList: {
		paddingTop: '3rem',
		paddingRight: '3rem',
		width: '400px',
	},
	steps: {
		paddingTop: '3rem',
		paddingBottom: '3rem',
		width: '400px',

		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
	},
	unit: {
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '14px',
		color: '#E87121',
	},
	list: {
		float: 'left',
	},
	listItem: {
		display: 'flex',
		paddingLeft: '0',
		paddingRight: '0',
		paddingBottom: '0.5rem',
	},
});

const FullRecipe = ({ recipeId }) => {
	const classes = useStyles();

	const recipes = useRecoilValue(recipesState);
	console.info(recipes, recipeId);
	const recipeData = recipes?.filter((r) => r.recipe?.id === recipeId)[0];

	return (
		<Stack className={classes.root}>
			<Card className={classes.card}>
				<Card.Body>
					<Card.Title className={classes.cardTitle}>{recipeData.recipe.title}</Card.Title>
					<Card.Text>{recipeData.recipe.description}</Card.Text>
					<Card.Text>Prep Time: {recipeData.recipe.prepTime}</Card.Text>
					<Card.Text>Cook Time: {recipeData.recipe.cookTime}</Card.Text>
				</Card.Body>
			</Card>
			<Row>
				<Col className={classes.ingredientList} sm={4}>
					<h2 className={classes.ingredientTitle}>Ingredients</h2>
					<ListGroup variant="flush" numbered>
						{recipeData.ingredients.map(
							(i, idx) =>
								i !== null && (
									<ListGroup.Item className={classes.listItem} key={idx.toString()} as="li">
										<div className="ms-2 me-auto">
											<div>{i.name}</div>
										</div>
										<Badge bg="light" className={classes.unit} pill>
											{i.quantity} {i.unit}
										</Badge>
									</ListGroup.Item>
								)
						)}
					</ListGroup>
				</Col>
				<Col className={classes.steps} sm={8}>
					<h2 className="d-flex align-items-start">Steps</h2>
					<ListGroup variant="flush" numbered>
						{recipeData.steps.map((i, idx) => (
							<ListGroup.Item key={idx.toString()} as="li" className={classes.listItem}>
								<div className="ms-2 me-auto">
									<div>{i.description}</div>
								</div>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
			</Row>
		</Stack>
	);
};

FullRecipe.defaultProps = {
	recipeId: null,
};

FullRecipe.propTypes = {
	recipeId: PropTypes.string,
};

export default FullRecipe;
