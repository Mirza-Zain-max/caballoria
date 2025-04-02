import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import MYWork from "../Assets/Image/MY WORK.png"
import MYWork2 from "../Assets/Image/service.png"

const Services = () => {
    return (
        <main className='my-5' style={{ background: "#F5F9F5" }}>
            {/* <Container fluid> */}
                <Row className="g-0">
                    <Col xs={12} md={6} lg={6}>
                        <Card>
                            <Image src={MYWork}  className='img-fluid' />
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Card>
                            <Image src={MYWork2} className='img-fluid'  />

                        </Card>
                    </Col>
                </Row>
            {/* </Container> */}
        </main>

    )
}

export default Services;
