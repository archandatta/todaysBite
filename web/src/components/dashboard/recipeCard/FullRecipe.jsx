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
	ingredients: {
		paddingTop: '3rem',
		width: '400px',

		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
	},
	steps: {
		paddingTop: '3rem',
		width: '400px',

		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
	},
	list: {
		float: 'left',
	},
});

const FullRecipe = ({ recipeId }) => {
	const classes = useStyles();

	const recipes = useRecoilValue(recipesState);
	const recipeData = recipes?.filter((r) => r.recipe.id === recipeId)[0];

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
				<Col className={classes.ingredients} sm={4}>
					<h2 className="d-flex justify-content-start">Ingredients</h2>
					<ListGroup variant="flush" numbered>
						{recipeData.ingredients.map((i, idx) => (
							<ListGroup.Item key={idx.toString()} as="li" className="d-flex justify-content-between align-items-start">
								<div className="ms-2 me-auto">
									<div>{i.name}</div>
								</div>
								<Badge bg="primary" pill>
									{i.quantity}
									{i.unit}
								</Badge>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
				<Col className={classes.steps} sm={8}>
					<h2 className="d-flex align-items-start">Steps</h2>
					<ListGroup variant="flush" numbered>
						{recipeData.steps.map((i, idx) => (
							<ListGroup.Item key={idx.toString()} as="li" className="d-flex justify-content-start">
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
