// import React, { useState } from 'react';
// import { Carousel, Card, Col, Container, Image, Row, Button } from 'react-bootstrap';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Cadr from '../Assets/Image/course.png';
// import Cadr1 from '../Assets/Image/course1.png';
// import Cadr2 from '../Assets/Image/course2.png';

// const Harbel = () => {
//     const [index, setIndex] = useState(0);
//     const images = [Cadr, Cadr1, Cadr2];
//     const cards = [
//         { title: 'Senior Fit', price: 'From €18.00', img: images[0] },
//         { title: 'Itching', price: 'From €18.00', img: images[1] },
//         { title: 'Colic Vital', price: 'From €18.00', img: images[2] },
//         { title: 'Intensital Water', price: 'From €18.00', img: images[0] },
//         { title: 'Senior Fit', price: 'From €18.00', img: images[1] },
//         { title: 'Itching', price: 'From €18.00', img: images[2] },
//         { title: 'Colic Vital', price: 'From €18.00', img: images[0] },
//         { title: 'Intensital Water', price: 'From €18.00', img: images[1] },
//     ];

//     const totalSlides = Math.ceil(cards.length / 4);

//     const handleSelect = (selectedIndex) => {
//         setIndex(selectedIndex);
//     };

//     return (
//         <Container className='my-3'>
//             <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={false} interval={null}>
//                 {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//                     <Carousel.Item key={slideIndex}>
//                         <Row className='justify-content-center'>
//                             {cards.slice(slideIndex * 4, slideIndex * 4 + 4).map((card, i) => (
//                                 <Col key={i} xs={10} md={6} lg={3}>
//                                     <Card className='mt-4'>
//                                         <Image src={card.img} className='img-fluid' />
//                                         <span className='p-3 d-block'>
//                                             <h4>{card.title}</h4>
//                                             <span>{card.price}<br />
//                                                 <span style={{ lineHeight: '50px' }}> Including VAT excl. Shipping Costs</span>
//                                             </span><br />
//                                             <span  style={{color:"#4FB84F"}} >Quick View &gt;</span>
//                                         </span>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     </Carousel.Item>
//                 ))}
//             </Carousel>
//             <div className='text-center mt-3'>
//                 <Button style={{backgroundColor:"#4FB84F"}} className='border-0 px-4' onClick={() => setIndex(index === 0 ? totalSlides - 1 : index - 1)}>
//                     <FaArrowLeft /> 
//                 </Button>
//                 <Button style={{backgroundColor:"#4FB84F"}} className='border-0 px-4 ms-2' onClick={() => setIndex(index === totalSlides - 1 ? 0 : index + 1)}>
//                      <FaArrowRight />
//                 </Button>
//             </div>
//             <div className='text-center mt-3'>
//                 <Button style={{backgroundColor:"#4FB84F"}} className='border-0 px-4' >
//                     Show All Product
//                 </Button>

//             </div>

//         </Container>
//     );
// }

// export default Harbel;


import React from 'react';
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Cadr from '../Assets/Image/course.png';
import Cadr1 from '../Assets/Image/course1.png';
import Cadr2 from '../Assets/Image/course2.png';

const Harbel = () => {
    const images = [Cadr, Cadr1, Cadr2];
    const cards = [
        { title: 'Senior Fit', price: 'From €18.00', img: images[0] },
        { title: 'Itching', price: 'From €18.00', img: images[1] },
        { title: 'Colic Vital', price: 'From €18.00', img: images[2] },
        { title: 'Intensital Water', price: 'From €18.00', img: images[0] },
        { title: 'Senior Fit', price: 'From €18.00', img: images[1] },
        { title: 'Itching', price: 'From €18.00', img: images[2] },
        { title: 'Colic Vital', price: 'From €18.00', img: images[0] },
        { title: 'Intensital Water', price: 'From €18.00', img: images[1] },
    ];

    return (
        <Container >
            <Row className='d-flex justify-content-center align-items-center text-center'>
                <Col xs={12} md={8} lg={6}>
                    <div className='inter-regular fs_09 border-1 border-black bg-black text-light w-50 mx-auto'>
                        TOP CLASSES FOR HORSE RIDING
                    </div>
                </Col>
            </Row>
            <div className='custom-slider'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    {cards.map((card, i) => (
                        <SwiperSlide key={i}>
                            <Card className='mt-4'>
                                <Image src={card.img} className='img-fluid' />
                                <span className='p-3 d-block'>
                                    <h4>{card.title}</h4>
                                    <span>{card.price}<br />
                                        <span style={{ lineHeight: '50px' }}> Including VAT excl. Shipping Costs</span>
                                    </span><br />
                                    <span style={{ color: "#4FB84F" }}>Quick View &gt;</span>
                                </span>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <div className='text-center mt-3'>
                <Button style={{ backgroundColor: "#4FB84F" }} className='border-0 px-4'>
                    Show All Products
                </Button>
            </div> */}
            </div>
        </Container>
    );
};

export default Harbel;
