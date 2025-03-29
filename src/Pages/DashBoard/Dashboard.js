import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import Frame from "../Icons/Frame 22.png"
import Hourse from "../Assets/Image/Hourse.png"
const Dashboard = () => {
    return (
        <main style={{ backgroundColor: "#f8f7f5" }}>
            <Container className='my-4' >
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <Card className='border-0 bg-transparent' style={{ letterSpacing: "2px", lineHeight: "1", padding: "20px" }}>
                            <Card.Body>
                                <h6 style={{ color: "#4FB84F" }}>
                                    <span style={{ letterSpacing: "3px" }}>Herzlich Willkommen auf Caballoria Equest</span>
                                </h6>
                                <div className='mb-5 text-eidt'> {/* Changed from <span> to <div> */}
                                    A Noble Horse makes every Rider a King.
                                </div>
                                <div className='mt-4'>
                                    <button className='border-0 p-3 text-light me-2 ' style={{ backgroundColor: " #4FB84F" }}>Verkaufspferde &gt;</button>
                                    <button className='border-1 p-3 text-dark mw-25 ' style={{ backgroundColor: " #fff" }}>Kontakt</button>
                                </div>
                                <div>
                                    <Image src={Frame} alt="Frame" className='img-fluid w-25 mt-3' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <Card className='border-0 bg-transparent'>
                            <Image src={Hourse} alt="Hourse" className='img-fluid' />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Dashboard