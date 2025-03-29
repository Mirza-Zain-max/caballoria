// import React from 'react'
// import { Col, Container, Image, Row } from 'react-bootstrap'
// import divCard from "../Assets/Image/Div [card].png"

// const Testimonials = () => {
//     return (
//         <main style={{ background: "#F8F7F5" }} className='my-5'>
//             <Container>
//                 <Row>
//                     <Col xs={12}>
//                         <span className='bg-dark text-light p-1  '>Testimonials</span>
//                     </Col>
//                     <Col>
//                         <h2 className='mt-3'>
//                             Don’t take our word,
//                             <br />
//                             take theirs
//                         </h2>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col xs={12} md={6} lg={3}>
//                         <Image src={divCard} className='w-100' />
//                     </Col>
//                     <Col xs={12} md={6} lg={3}>
//                         <Image src={divCard} className='w-100' />
//                     </Col>
//                     <Col xs={12} md={6} lg={3}>
//                         <Image src={divCard} className='w-100' />
//                     </Col>
//                     <Col xs={12} md={6} lg={3}>
//                         <Image src={divCard} className='w-100' />
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col xs={12} md={6} lg={3}>
//                         <Image src={divCard} className='w-100' />
//                     </Col>
//                     <Col xs={12} md={6} lg={3}>
//                         <Image src={divCard} className='w-100' />
//                     </Col>
//                     <Col xs={12} md={6} lg={3}>
//                         <Image src={divCard} className='w-100' />
//                     </Col>
//                     <Col xs={12} md={6} lg={3}>
//                         <Image src={divCard} className='w-100' />
//                     </Col>
//                 </Row>
//             </Container>

//         </main>
//     )
// }

// export default Testimonials




import React from 'react';
import { Col, Container, Image, Row, Carousel } from 'react-bootstrap';
import divCard from "../Assets/Image/Div [card].png";

const Testimonials = () => {
    return (
        <main style={{ background: "#F8F7F5" }} className=''>
            <Container>
                <Row className='mt-5'>
                    <Col xs={12}>
                        <span className='bg-dark text-light p-1'>Testimonials</span>
                    </Col>
                    <Col>
                        <h2 className='mt-3'>
                            Don’t take our word,
                            <br />
                            take theirs
                        </h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                {/* First Carousel Row */}
                <Row>
                    <Carousel indicators={false} controls={true} interval={2500}  className='w-100' slide >
                        <Carousel.Item>
                            <Row>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Row>

                {/* Second Carousel Row */}
                <Row className='mt-4'>
                    <Carousel indicators={false} controls={false} interval={1500} className='w-100'>
                        <Carousel.Item>
                            <Row className='mb-5'>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className='mb-5 '>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                                <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </main>
    );
}

export default Testimonials;
