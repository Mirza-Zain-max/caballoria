import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import bgContainer from "../Assets/Image/Scr.png"
import bgConta from "../Assets/Image/Scree.png"

const Latest = () => {
    return (
        <main>
            <Container>
                <Row className='justify-content-center my-4'>
                    <Col xs={12} md={8} lg={6} className='text-center'>
                        <span className='bg-dark text-light p-1 mt-5  d-inline-block'>LATEST POST AND BLOG</span>
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-3 '>
                        <h3 className='text-center fw-bold'>Stay Up To Date With Our Latest Posts <br /> And Blog</h3>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-3 align-items-center'>
                    <Col xs={10} md={8} lg={3} className=' '>
                        <Card>
                            <Image src={bgContainer} className='img-fluid p-1' />
                        </Card>
                    </Col>
                    <Col xs={10} md={8} lg={3} className=' '>
                        <Card>
                            <Image src={bgConta} className='img-fluid p-1' />
                        </Card>
                    </Col>
                    <Col xs={10} md={8} lg={3} className=' '>
                        <Card>
                            <Image src={bgContainer} className='img-fluid p-1' />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Latest
