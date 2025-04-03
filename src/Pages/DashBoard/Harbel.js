// import React from 'react';
// import { Container, Card, Image, Row, Col } from 'react-bootstrap';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper/modules';
// import Cadr from '../Assets/Image/course.png';
// import Cadr1 from '../Assets/Image/course1.png';
// import Cadr2 from '../Assets/Image/course2.png';

// const Harbel = () => {
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

//     return (
//         <Container >
//             <Row className='d-flex justify-content-center align-items-center text-center'>
//                 <Col xs={12} md={8} lg={6}>
//                     <div style={{ letterSpacing: "1.9px" }} className='inter-regular fs_09 border-1 border-black bg-black text-light w-50 mx-auto'>
//                         TOP CLASSES FOR HORSE RIDING
//                     </div>
//                 </Col>
//             </Row>
//             <Row className='d-flex justify-content-center align-items-center text-center'>
//                 <Col xs={12} md={8} lg={6}>
//                     <span>
//                         Herbal cures
//                     </span>
                   
//                 </Col>
//             </Row>
//             <div className='custom-slider'>
//                 <Swiper
//                     slidesPerView={4}
//                     spaceBetween={20}
//                     navigation={true}
//                     pagination={{ clickable: true }}
//                     modules={[Navigation, Pagination]}
//                     className="mySwiper"
//                 >
//                     {cards.map((card, i) => (
//                         <SwiperSlide key={i}>
//                             <Card className='mt-4'>
//                                 <Image src={card.img} className='img-fluid' />
//                                 <span className='p-3 '>
//                                     <h4>{card.title}</h4>
//                                     <span>{card.price}<br />
//                                         <span style={{ lineHeight: '50px' }}> Including VAT excl. Shipping Costs</span>
//                                     </span><br />
//                                     <span style={{ color: "#4FB84F" }}>Quick View &gt;</span>
//                                 </span>
//                             </Card>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//                 {/* <div className='text-center mt-3'>
//                 <Button style={{ backgroundColor: "#4FB84F" }} className='border-0 px-4'>
//                     Show All Products
//                 </Button>
//             </div> */}
//             </div>
//         </Container>
//     );
// };

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
        <Container fluid  className='mt-5 '>
            <Row  className='d-flex justify-content-center align-items-center text-center' >
                <Col xs={12} md={8} lg={12} className='d-flex justify-content-center align-items-center text-center'>
                    <div style={{ letterSpacing: "1.9px" }} className='inter-regular fs_10 border-1 border-black bg-black text-light w-25 '>
                        TOP CLASSES FOR HORSE RIDING
                    </div>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center text-center'>
                <Col xs={12} md={8} lg={6}>
                    <span className='fs_33 inter-bold' style={{color:" #212529"}}>Herbal Cures</span>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center text-center'>
                <Col xs={12} md={8} lg={12}>
                    <span className='fs_14'>New horse? Ease the transition with our proven herbal supplements!</span>
                </Col>
            </Row>
            <div className='custom-slider'>
                <Swiper
                    slidesPerView={"auto"} 
                    spaceBetween={15}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {cards.map((card, i) => (
                        <SwiperSlide key={i} style={{maxWidth:"20rem"}}>
                            <Card className='mt-4'>
                                <Image src={card.img} className='img-fluid' />
                                <span className='p-3 '>
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
            </div>
        </Container>
    );
};

export default Harbel;
