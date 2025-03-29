import React from 'react'
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap'

const Searchbar = () => {
    return (
        <main className='mt-5 mb-3' style={{ backgroundColor: " #F5F9F5" }}>
            <Container>
                <Card className=' my-5 bg-transparent border-0 p-5'>
                    <Row className="gy-4"> {/* Added gy-4 for vertical spacing */}
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group className="mb-3"> {/* Added mb-3 for bottom spacing */}
                                <Form.Label htmlFor="search" className="custom-label">Search</Form.Label>
                                <Form.Control type="search" placeholder="Search" />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="refNumber" className="custom-label">Ref Number</Form.Label>
                                <Form.Control type="search" placeholder="Ref Number" />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="categories" className="custom-label">Categories</Form.Label>
                                <Form.Select className="custom-select">
                                    <option value="">Select Category</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gy-4">
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="gender" className="custom-label">Gender</Form.Label>
                                <Form.Select className="custom-select">
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="color" className="custom-label">Color</Form.Label>
                                <Form.Select className="custom-select">
                                    <option value="">Select Color</option>
                                    <option value="red">Red</option>
                                    <option value="blue">Blue</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group className="">
                                <Form.Label className="custom-label">Height in cm</Form.Label>
                                <div className="d-flex justify-content-between">
                                    <span>0 cm</span>
                                    <span>100 cm</span>
                                </div>
                                <Form.Range />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center mt-5">
                        <Col xs={12} md="auto" > {/* Added md="auto" for proper alignment */}
                            <Button className='border-0 ' style={{backgroundColor:" #4FB84F"}}>Advanced Filters</Button>
                        </Col>
                        <Col xs={12} md="auto" >
                            <Button className='bg-transparent text-dark' style={{border:"1px solid #4FB84F"}}>Search Result</Button>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </main>
    )
}

export default Searchbar