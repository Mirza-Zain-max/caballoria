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




// import React from 'react';
// import { Col, Container, Image, Row, Carousel } from 'react-bootstrap';
// import divCard from "../Assets/Image/Div [card].png";

// const Testimonials = () => {
//     return (
//         <main style={{ background: "#F8F7F5" }} className=''>
//             <Container>
//                 <Row className='mt-5'>
//                     <Col xs={12}>
//                         <span className='bg-dark text-light p-1' style={{letterSpacing:"4.2px"}}>Testimonials</span>
//                     </Col>
//                     <Col>
//                         <h2 className='mt-3 fs_40 inter-medium'>
//                             Don’t take our word,
//                             <br />
//                             take theirs
//                         </h2>
//                     </Col>
//                 </Row>
//             </Container>
//             <Container fluid>
//                 {/* First Carousel Row */}
//                 <Row>
//                     <Carousel indicators={false} controls={true} pause={false} interval={1000} className='w-100' slide >
//                         <Carousel.Item>
//                             <Row>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                             </Row>
//                         </Carousel.Item>
//                         <Carousel.Item>
//                             <Row>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                             </Row>
//                         </Carousel.Item>
//                     </Carousel>
//                 </Row>

//                 {/* Second Carousel Row */}
//                 <Row className='mt-4'>
//                     <Carousel indicators={false} controls={false} interval={1500} className='w-100'>
//                         <Carousel.Item>
//                             <Row className='mb-5'>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                             </Row>
//                         </Carousel.Item>
//                         <Carousel.Item>
//                             <Row className='mb-5 '>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                                 <Col xs={6} md={6} lg={3}><Image src={divCard} className='w-100' /></Col>
//                             </Row>
//                         </Carousel.Item>
//                     </Carousel>
//                 </Row>
//             </Container>
//         </main>
//     );
// }

// export default Testimonials;


import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import divCard from "../Assets/Image/Div [card].png";
import divCard2 from "../Assets/Image/Div [card]2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Testimonials = () => {
    const images = [divCard, divCard2]; // Array of both images

    // Function to render slides
    const renderSlides = () => {
        return [...Array(8)].map((_, i) => (
            <SwiperSlide key={i} style={{ maxWidth: "25rem" }}>
                <Image
                    src={images[i % 2]} // Alternate between divCard and divCard2
                    className='w-100'
                    style={{ border: 'none', boxShadow: 'none' }}
                />
            </SwiperSlide>
        ));
    };

    return (
        <main style={{ background: "#F8F7F5" }}>
            <Container>
                <Row className='mt-5'>
                    <Col xs={12}>
                        <span className='bg-dark text-light p-1' style={{ letterSpacing: "4.2px" }}>Testimonials</span>
                    </Col>
                    <Col>
                        <h2 className='mt-3 fs_40 inter-medium'>
                            Don’t take our word,
                            <br />
                            take theirs
                        </h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                {/* First Swiper Row */}
                <Row>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        speed={4000}
                        modules={[Autoplay]}
                        className='mySwiper mt-4'
                    >
                        {renderSlides()}
                    </Swiper>
                </Row>

                {/* Second Swiper Row */}
                <Row className='mt-5 mb-5'>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: true, // opposite direction for 2nd row
                        }}
                        speed={4000}
                        modules={[Autoplay]}
                        className='mySwiper'
                    >
                        {renderSlides()}
                    </Swiper>
                </Row>
            </Container>
        </main>
    );
};

export default Testimonials;