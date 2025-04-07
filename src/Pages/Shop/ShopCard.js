import React from 'react';
import { Card, Col, Container, Row, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Shopcad from "../Assets/Image/shopCard.png";

const ShopCard = () => {
    const products = [
        { id: 1, title: 'Senior Fit', price: 19.99, image: Shopcad },
        { id: 2, title: 'Senior Fit', price: 29.99, image: Shopcad },
        { id: 3, title: 'Senior Fit', price: 39.99, image: Shopcad },
        { id: 4, title: 'Senior Fit', price: 39.99, image: Shopcad },
        { id: 5, title: 'Senior Fit', price: 39.99, image: Shopcad },
        { id: 6, title: 'Senior Fit', price: 39.99, image: Shopcad },
    ];

    return (
        <Container >
            <Card className="my-4 rounded-0 p-3" style={{ backgroundColor: '#f8f9fa' }}>
                <Row className="align-items-center">
                    <Col xs={12} sm={6}>
                        <span className='fs_09 text-muted'>Showing all {products.length} results</span>
                    </Col>
                    <Col xs={12} sm={6} className="text-sm-end mt-2 mt-sm-0">
                        <DropdownButton id="dropdown-basic-button" variant='light' title="Default sorting">
                            <Dropdown.Item href="#/action-1">Default sorting</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sort by popularity</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Sort by average rating</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Card>
            <Row className="g-4">
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={product.image} alt={product.title} />
                            <Card.Body>
                                <Card.Title className='fs_15 inter-medium'>{product.title}</Card.Title>
                                <Card.Text className='text-muted'>
                                    From €{product.price.toFixed(2)} <br />
                                    Including VAT excl. Shipping Costs
                                </Card.Text>
                                <Button className='bg-transparent border-0' style={{ color: "#4FB84F" }}>Quick View &gt;</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ShopCard;