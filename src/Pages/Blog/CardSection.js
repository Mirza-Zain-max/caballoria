import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import BlogCard from "../Assets/Image/blogcard.png"
import { FaRegUser } from 'react-icons/fa'

const CardSection = () => {
    return (
        <>
            <main style={{ marginTop: 532.5 }}>
                <Container>
                    <Row className='mb-5'>
                        <Col sm={12} md={12} lg={12}>
                            <Col sm={12} md={8} lg={8} className="p-0">
                                <Card>
                                    <Image src={BlogCard} className="img-fluid w-100" style={{ height: "auto" }} />
                                    <Col sm={12} md={12} lg={12} className="p-0 mt-3 mt-md-4">
                                        <span>
                                           <FaRegUser className='fs-61'/> Jasy
                                        </span>
                                    </Col>
                                </Card>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default CardSection;
