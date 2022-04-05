import React from 'react';

import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import Top from '../nav/Top';

const ColumnPage = (props) => {
	return (
		<>
			<Top />
			<Container fluid>
				<Row className="justify-content-md-center">
					<Col md="auto">{props.center}</Col>
					<Col xs lg="2">
						{props.right}
					</Col>
				</Row>
			</Container>
		</>
	);
};

ColumnPage.defaultProps = {
	left: null,
	center: null,
	right: null,
};

ColumnPage.propTypes = {
	left: PropTypes.node,
	center: PropTypes.node,
	right: PropTypes.node,
};

export default ColumnPage;
