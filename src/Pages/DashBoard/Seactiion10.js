import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Seactiion10 = () => {
    return (
        <main className='mt-5' style={{ background: "#4FB84F" }}>
            <Container>
                <Row>
                    <Col className='p-5 text-center text-light '>
                        <h1>
                            Are you looking for a specific horse?
                        </h1>
                        <span>
                            Then fill out our short questionnaire and you will receive current
                            <br />
                            suitable offers from our team in a timely manner!
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center mb-5'>
                        <Button className='bg-white rounded-5' style={{ color: "#4FB84F", border: "1px solid  #4FB84F" }} >
                            Fill Out From
                        </Button>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Seactiion10
