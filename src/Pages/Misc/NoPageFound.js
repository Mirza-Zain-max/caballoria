// NotFound.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="text-center" style={{ marginTop: '100px' }}>
      <Row>
        <Col>
          <h1 style={{ fontSize: '5rem', fontWeight: 'bold' }}>404</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              Go Back Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
