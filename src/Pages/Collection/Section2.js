import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Section2 = () => {
    return (
        <>
            <main className='mb-5' style={{ backgroundColor: " #F5F9F5" }}>
                <Container fluid className='mb-5'>
                    <Row>
                        <Col xs={12} md={6} lg={10} className='mx-auto'>
                            <Card className='custom-form bg-transparent border-0 p-5'>
                                <Row className="gy-4">
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="color" style={{ color: '#4CAF50' }} className='fs_13 inter-medium'>Color</Form.Label>
                                            <Form.Select className="custom-select" >
                                                <option value="">Select Color</option>
                                                <option value="red">Red</option>
                                                <option value="blue">Blue</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="gender" style={{ color: '#4CAF50' }} className='fs_13 inter-medium'>Gender</Form.Label>
                                            <Form.Select className="custom-select" >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="sticksize" style={{ color: '#4CAF50' }} className='fs_13 inter-medium'>Stick Size</Form.Label>
                                            <Form.Select className="custom-select " >
                                                <option value="">Select </option>
                                                <option value="male">Stick 1</option>
                                                <option value="female">Stick 2</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="race" style={{ color: '#4CAF50' }} className='fs_13 inter-medium'>Race</Form.Label>
                                            <Form.Select className="custom-select" >
                                                <option value="">Select</option>
                                                <option value="category1">Category 1</option>
                                                <option value="category2">Category 2</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={10} className='mx-auto text-center'>
                            <Button className='btn btn-primary' style={{ backgroundColor: '#4CAF50', border: 'none' }}>Clear Filters</Button>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default Section2