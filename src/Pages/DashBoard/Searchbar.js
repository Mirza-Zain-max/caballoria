import React, { useState } from 'react'
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap'

const Searchbar = () => {
    const [height, setHeight] = useState(50);

    const handleChange = (e) => {
        setHeight(e.target.value);
    };

    // Custom CSS for the slider thumb
    const sliderThumbStyles = `
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 15px;
      border-radius: 60%;
    //   background:  ;
    border  : 1px solid #4FB84F;
      cursor: pointer;
    }
    
    input[type=range]::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: red;
      cursor: pointer;
    }
  `;
    return (
        <main className='mt-5' style={{ backgroundColor: " #F5F9F5" }}>
            <Container>
                <Card className='custom-form bg-transparent border-0 p-5'>
                    <Row className="gy-4"> {/* Added gy-4 for vertical spacing */}
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group className="mb-3"> {/* Added mb-3 for bottom spacing */}
                                <Form.Label htmlFor="search" style={{ color: '#4CAF50'}} className='fs_13 inter-medium'>Search</Form.Label>
                                <Form.Control type="search" placeholder="Search"  />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="refNumber" style={{ color: '#4CAF50'}} className='fs_13 inter-medium'>Ref Number</Form.Label>
                                <Form.Control type="search" placeholder="0000"  />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="categories" style={{ color: '#4CAF50'}} className='fs_13 inter-medium'>Categories</Form.Label>
                                <Form.Select className="custom-select" >
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
                                <Form.Label htmlFor="gender" style={{ color: '#4CAF50'}} className='fs_13 inter-medium'>Gender</Form.Label>
                                <Form.Select className="custom-select" >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="color" style={{ color: '#4CAF50'}} className='fs_13 inter-medium'>Color</Form.Label>
                                <Form.Select className="custom-select" >
                                    <option value="">Select Color</option>
                                    <option value="red">Red</option>
                                    <option value="blue">Blue</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div style={{
                                fontFamily: 'Arial, sans-serif',
                                maxWidth: '500px',
                              
                            }}>
                                <style>{sliderThumbStyles}</style>

                                <span style={{ color: '#4CAF50'}} className='fs_13 inter-medium' >
                                    Height in cm
                                </span>

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <span>0 cm</span>
                                    <span>100 cm</span>
                                </div>

                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={height}
                                    onChange={handleChange}
                                    style={{
                                        WebkitAppearance: 'none',
                                        width: '100%',
                                        height: '4px',
                                        borderRadius: '5px',
                                        border: "1px solid #4FB84F",
                                        outline: 'none',

                                    }}
                                />

                            </div>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center mt-5">
                        <Col xs={12} md="auto" > {/* Added md="auto" for proper alignment */}
                            <Button className='border-0 ' style={{ backgroundColor: " #4FB84F" }}>Advanced Filters</Button>
                        </Col>
                        <Col xs={12} md="auto" >
                            <Button className='bg-transparent text-dark' style={{ border: "1px solid #4FB84F" }}>Search Result</Button>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </main>
    )
}

export default Searchbar
