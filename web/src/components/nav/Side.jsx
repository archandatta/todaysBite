import React from 'react';
import { makeStyles } from '@mui/styles';

import { Container, Nav } from 'react-bootstrap';

const useStyles = makeStyles({
	root: {
		width: '00px',
		padding: '0',
		marginRight: '35rem',
	},
});

const Side = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Nav defaultActiveKey="/home" className="flex-column">
				<Nav.Link href="/home">Active</Nav.Link>
				<Nav.Link eventKey="link-1">Link</Nav.Link>
				<Nav.Link eventKey="link-2">Link</Nav.Link>
				<Nav.Link eventKey="disabled" disabled>
					Disabled
				</Nav.Link>
			</Nav>
		</Container>
	);
};

export default Side;
