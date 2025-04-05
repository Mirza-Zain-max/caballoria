import React, { useState } from 'react';
import { Card, Col, Container, Form, Image, Row, Button, Table } from 'react-bootstrap';
import Logo from "../../Pages/Icons/Vector.png";

const CardSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        country: 'United Kingdom (UK)',
        address1: '',
        address2: '',
        city: '',
        county: '',
        postcode: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the data to your server
    };

    return (
        <>
            <main className='mt-3 mb-5'>
                <Container>
                    <Row className=''>
                        <Col xs={12}>
                            <Card className='p-3 rounded-0 ' style={{ backgroundColor: '#F8F8F8', borderTop: "3px solid #1E85BE" }}>
                                <span className='text-muted'>
                                    <Image src={Logo} className='me-2' alt="Logo" />
                                    Have a coupon? Click here to enter your code
                                </span>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='mt-2  g-3'>
                        <Col xs={12} md={6} lg={6}>
                            <Card className='p-3 rounded-0' style={{ backgroundColor: '#F8F8F8' }}>
                                <h5 className='fs_15 inter-medium'>Billing Details</h5>
                                <hr />
                                <Form onSubmit={handleSubmit}>
                                    <Row className=" g-2">
                                        <Col xs={6}>
                                            <Form.Group controlId="firstName">
                                                <Form.Label>
                                                    First name <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Control 
                                                className='rounded-0'
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group controlId="lastName">
                                                <Form.Label>
                                                    Last name <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Control 
                                                className='rounded-0'
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group controlId="company">
                                                <Form.Label>Company name (optional)</Form.Label>
                                                <Form.Control 
                                                className='rounded-0'
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group controlId="country">
                                                <Form.Label>
                                                    Country / Region <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Select
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                                                    <option value="United States (US)">United States (US)</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Germany">Germany</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group controlId="address1">
                                                <Form.Label>
                                                    Street address <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Control 
                                                className='rounded-0 mb-3'
                                                    type="text"
                                                    placeholder="House number and street name"
                                                    name="address1"
                                                    value={formData.address1}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Form.Control 
                                                className='rounded-0'
                                                    type="text"
                                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                                    name="address2"
                                                    value={formData.address2}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group controlId="city">
                                                <Form.Label>
                                                    Town / City <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Control 
                                                className='rounded-0'
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group controlId="county">
                                                <Form.Label>County (optional)</Form.Label>
                                                <Form.Control 
                                                className='rounded-0'
                                                    type="text"
                                                    name="county"
                                                    value={formData.county}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group controlId="postcode">
                                                <Form.Label>
                                                    Postcode <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Control 
                                                className='rounded-0'
                                                    type="text"
                                                    name="postcode"
                                                    value={formData.postcode}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Col xs={12}>
                                        <Form.Group controlId="phone">
                                            <Form.Label>
                                                Phone <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control 
                                            className='rounded-0'
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group controlId="email">
                                            <Form.Label>
                                                Email address <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control 
                                            className='rounded-0'
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Form>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <Card className='p-3 rounded-0' style={{ backgroundColor: '#F8F8F8' }}>
                                <h5 className='fs_15 inter-medium'>Your Order</h5>
                                <hr />
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th className='text-muted'>Product</th>
                                            <th className='text-muted'>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='text-muted'>Apple and Straw</td>
                                            <td className='text-muted'>£24.00</td>
                                        </tr>
                                        <tr>
                                            <td className='text-muted'>Subtotal</td>
                                            <td className='text-muted'>$£24.00</td>
                                        </tr>
                                        <tr className='border-top'>
                                            <td className='text-muted'>Total</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Col>
                                    <Card className='p-4 rounded-0 ' style={{ backgroundColor: '#F8F8F8', borderTop: "3px solid #1E85BE" }}>
                                        <span className='text-muted' style={{ textAlign: "center" }}>
                                            <Image src={Logo} className='me-2' alt="Logo" />
                                            Sorry, it seems that there are no available payment methods for your
                                            state. Please contact us if you require assistance or wish to make
                                            alternate arrangements.
                                        </span>
                                    </Card>
                                </Col>
                                <hr />
                                <Card className='p-3 rounded-0 border-0 mt-3' style={{ backgroundColor: '#F8F8F8' }}>
                                    <span className='text-muted' style={{ textAlign: "justify" }}>
                                        Your personal data will be used to process your order, support your experience
                                        throughout this website, and for other purposes described in our privacy policy.
                                    </span>
                                    <Button style={{ backgroundColor: "#4FB84F" }} className='w-25 rounded-0 border-0 mt-3'>
                                        <span className='text-white'>Place Order</span>
                                    </Button>
                                </Card>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default CardSection;