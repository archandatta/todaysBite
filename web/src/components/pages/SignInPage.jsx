import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Top from '../nav/Top';
import { authenticate } from '../../util/rest/auth';

const signInPage = {
	username: 'Enter Username',
	usernamePlaceholder: 'username',
	password: 'Enter Password',
	passwordPlaceholder: 'password',
	button: 'Sign In',
};

const useStyles = makeStyles({
	root: {
		marginTop: '2rem',
		width: '400px',
	},
});

const SignInPage = () => {
	const navigate = useNavigate();
	const classes = useStyles();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			if (username !== '' && password !== '') {
				const user = await authenticate(username, password);
				localStorage.setItem('userId', 'U1');
				// localStorage.setItem('userId', user.data.id);
				setResponse(user.data);
			}
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (response !== null && !loading) {
			// push to dashboard with user id
			navigate('/dashboard');
		}
	}, [error, navigate, loading, response]);

	return (
		<>
			<Top />
			<Container className={classes.root} fluid="sm">
				<Row>
					<Col>
						<Form>
							<Form.Group className="mb-3" controlId="formBasicUsername">
								<Form.Label>{signInPage.username}</Form.Label>
								<Form.Control
									type="username"
									placeholder={signInPage.usernamePlaceholder}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>{signInPage.password}</Form.Label>
								<Form.Control
									type="password"
									placeholder={signInPage.passwordPlaceholder}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Group>
							<Button variant="primary" onClick={() => fetchData()}>
								{signInPage.button}
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SignInPage;
