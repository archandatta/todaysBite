import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { getRecipes } from '../../../util/rest/recipes';

const RecipeCard = () => {
	const navigate = useNavigate();
	const userId = localStorage.getItem('userId');

	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	const fetchData = async (userId) => {
		try {
			const recipes = await getRecipes(userId);
			setResponse(recipes.data);
			console.info(recipes.data);
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

	useEffect(() => {
		if (response !== null && !loading) {
		}
	}, [error, loading, response]);

	return (
		<Card>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

export default RecipeCard;
