// NotFound.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigation = useNavigate()
  return (
    <Container className="text-center" style={{ marginTop: '100px' }}>
      <Row>
        <Col>
          <h1 style={{ fontSize: '5rem', fontWeight: 'bold' }}>404</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            Oops! The page you're looking for doesn't exist.
          </p>
         
            <Button variant="primary" size="lg" onClick={() => navigation(-1)}>
              Go Back 
            </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
