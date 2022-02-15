import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useAuth } from '../../hooks/auth';

const RecipeCard = () => {
	const { response, error } = useAuth();
	console.info(response, error);

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
