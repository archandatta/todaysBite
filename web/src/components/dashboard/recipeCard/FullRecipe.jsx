import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import { useRecoilValue } from 'recoil';
import { recipesState } from '../../../globals/atoms/recipes';

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
		width: '600px',
	},
	headerCard: {
		height: '200px',
		width: '600px',
	},
});

const FullRecipe = ({ recipeId }) => {
	const classes = useStyles();

	const recipes = useRecoilValue(recipesState);
	const recipeData = recipes?.filter((r) => r.recipe.id === recipeId)[0];
	console.info(recipeData);

	return (
		<Container className={classes.root} fluid="sm">
			<Card className={classes.headerCard}>{recipeData.recipe.title}</Card>
			<Row>
				<Col sm={4}>
					Ingredients
					<ul>
						{recipeData.ingredients.map((i, idx) => (
							<li key={idx.toString()}>{i !== null && i.name}</li>
						))}
					</ul>
				</Col>
				<Col sm={8}>
					Steps
					<ul>
						{recipeData.steps.map((i, idx) => (
							<li key={idx.toString()}>
								{i.stepNum}
								{i.description}
							</li>
						))}
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

FullRecipe.defaultProps = {
	recipeId: null,
};

FullRecipe.propTypes = {
	recipeId: PropTypes.string,
};

export default FullRecipe;
