import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { useRecoilValue } from 'recoil';
import { Card, ListGroup, Col, Stack, Row, Badge } from 'react-bootstrap';

import { getGroceryList } from '../../../util/rest/mealPlan';

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
	},
	card: {
		width: '800px',
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
	},
	ingredientList: {
		paddingTop: '3rem',
		paddingRight: '3rem',
		marginBottom: '4rem',
	},
	unit: {
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '14px',
		color: '#E87121',
	},
	listItem: {
		display: 'flex',
		paddingLeft: '0',
		paddingRight: '0',
		paddingBottom: '0.5rem',
	},
});

const GroceryList = ({ recipeId }) => {
	const classes = useStyles();
	const userId = localStorage.getItem('userId');

	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	const fetchData = async (userId) => {
		try {
			const ingredients = await getGroceryList(userId);
			console.info(ingredients);
			setResponse(ingredients.data);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData(userId);
	}, [userId]);

	return (
		<Stack className={classes.root}>
			<Card className={classes.card}>
				<Card.Body>
					<Card.Title className={classes.cardTitle}>Grocery List</Card.Title>
				</Card.Body>
			</Card>
			<div className={classes.ingredientList}>
				<h2 className={classes.ingredientTitle}>Ingredients</h2>
				<ListGroup variant="flush" numbered>
					{response?.map(
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
			</div>
		</Stack>
	);
};

GroceryList.defaultProps = {
	recipeId: null,
};

GroceryList.propTypes = {
	recipeId: PropTypes.string,
};

export default GroceryList;
