import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import inpusr from "../Assets/Image/inpust.png";

const FAQ = () => {
    return (
        <main className='my-5' >
            <Container>
                <Row className='d-flex justify-content-center align-items-center text-center'>
                    <Col xs={12}>
                        <h6 className='border-1 bg-dark text-light d-inline-block py-1 mt-5 px-3'>FAQ</h6>
                    </Col>
                    <Col xs={12} md={8} lg={6} className='text-center'>  
                        <h2 className='fw-bold mt-3'>You’ve Got Questions?
                            <br />
                            We’ve Got Answers!
                        </h2>
                        <Button className='bg-transparent border-1 mt-3 border-black rounded-5 p-3'>
                            <span className='rounded-4 p-1 mx-2' style={{ backgroundColor: "#4fb84f" }}>Unser Services</span>
                            <Button className='bg-transparent border-0'>
                            <span className='text-dark'>Transport</span>
                            </Button>
                        </Button>
                    </Col>
                    <Col xs={12} md={10} lg={8} className='mt-4'>
                        <Image src={inpusr} fluid className='mb-5' />
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default FAQ;
