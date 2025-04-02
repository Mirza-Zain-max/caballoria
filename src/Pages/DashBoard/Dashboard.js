import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import Frame from "../Icons/Frame 22.png"
import Hourse from "../Assets/Image/Hourse.png"
const Dashboard = () => {
    return (
        <main style={{ backgroundColor: "#f8f7f5" }}>
            <Container className='my-5' >
                <Row >
                    <Col sm={12} md={12} lg={6}>
                        <Card className='border-0 mt-5 bg-transparent' style={{ letterSpacing: "2px", lineHeight: "1", padding: "20px" }}>
                            <Card.Body>
                                <h5 style={{ color: "#4FB84F" }}>
                                    <span className='inter-medium' style={{ letterSpacing: "3px" }}>Herzlich Willkommen auf Caballoria Equest</span>
                                </h5>
                                <div className='my-5 fs_48 inter-bold' style={{ color: "#494949" }}>
                                    A Noble Horse makes every Rider a King.
                                </div>
                                <Row className="g-0 d-flex justify-content-between">
                                    <Col sm={12} md={12} lg={6} className="mt-4  ">
                                        <Button className="border-0 w-75 rounded-0 p-3 text-light" style={{ backgroundColor: "#4FB84F" }}>
                                            Verkaufspferde &gt;
                                        </Button>
                                    </Col> 
                                     <Col sm={12} md={12} lg={6} className="mt-4 ">
                                        <Button className="border-1 border-black rounded-0 w-75 p-3 text-dark bg-transparent inter-medium">
                                            Kontakt
                                        </Button>
                                    </Col>
                                </Row>

                                <div>
                                    <Image src={Frame} alt="Frame" className='img-fluid w-50 mt-5' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <Card className='border-0 mt-5 bg-transparent'>
                            <Image src={Hourse} alt="Hourse" className='img-fluid' />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Dashboard