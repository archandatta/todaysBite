import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { recipesState } from '../../../globals/atoms/recipes';

import { getRecipes } from '../../../util/rest/recipes';
import RecipeCard from './RecipeCard';

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
	},
});

const Recipes = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const userId = localStorage.getItem('userId');
	const setRecipes = useSetRecoilState(recipesState);

	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	const fetchData = async (userId) => {
		try {
			const recipes = await getRecipes(userId);
			setResponse(recipes.data);
			setRecipes(recipes.data);
			// console.info(recipes.data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (userId === null) {
			navigate('/');
		}
		fetchData(userId);
	}, [navigate, userId]);

	return (
		<Container className={classes.root} fluid>
			<Row>
				{response?.map((recipe, index) => (
					<Col key={index.toString()}>
						<RecipeCard key={index.toString()} recipeData={recipe} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Recipes;
