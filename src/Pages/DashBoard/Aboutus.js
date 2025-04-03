// import React from 'react'
// import Aboutua from "../Assets/Image/about.png.png"
// import { Card, Col, Container, Image, Row } from 'react-bootstrap'
// import check from "../Assets/Image/Item.png"; // Fixed import
// import check1 from "../Assets/Image/Item (1).png"; // Fixed import


// const Aboutus = () => {
//     return (
//         <main style={{backgroundColor:"#fff"}}>
//             <Container className='' >
//             <Row>
//                 <Col sm={12} md={12} lg={6}>
//                     <Card className='border-0 mb-3 bg-transparent'>
//                         <Image src={Aboutua} alt="Hourse" className='img-fluid ' style={{ width: 390, height: 550 }} />
//                     </Card>
//                 </Col>
//                 <Col sm={12} md={12} lg={6}>
//                     <Card className='border-0 rounded-5 p-5 ' style={{ backgroundColor: '#f8f7f5' }}>
//                         <Card.Body>
//                             <Card.Title className='border-1 border-black bg-black w-50 text-light h-25 fs-6 mt-3'>EQUESTRIAN AND BEST </Card.Title>
//                             <Card.Title className='fs-1 mt-3'>About Us</Card.Title>
//                             <Card.Text>
//                                 <div className='text-justify' style={{ lineHeight: "2rem" }}> {/* Changed <p> to <div> */}
//                                     We've personally assessed a collection of over 300 horses, and guess what?
//                                     You can browse them by category to find your dream match! Each category lets
//                                     you filter our horses for sale based on what matters to you. Want a gentle
//                                     giant? Sort by height! Looking for a mare or gelding? Choose your preference!
//                                     With easy sorting by gender, age, height, and more, finding your perfect horse is a breeze.
//                                 </div>
//                                 <Row>
//                                     <Col>
//                                         <Image src={check} alt="Check Icon" className="img-fluid" style={{ width: 310 }} />
//                                     </Col>
//                                     <Col>
//                                         <Image src={check1} alt="Check Icon" className="img-fluid" style={{ width: 310 }} />
//                                     </Col>
//                                 </Row>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//         </main>
//     )
// }

// export default Aboutus

import React from 'react';
import Aboutua from "../Assets/Image/about.png.png";
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import check from "../Assets/Image/Item.png";
import check1 from "../Assets/Image/Item (1).png";

const Aboutus = () => {
    return (
        <main className='mt-5' style={{ backgroundColor: "#fff" }}>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <Card className='border-0  bg-transparent'>
                            <Image src={Aboutua} alt="Horse" className='img-fluid' style={{ width: 490, height: 686 }} />
                        </Card>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <Card className='border-0  rounded-5 ' style={{ backgroundColor: '#f8f7f5' , padding:"3rem"  , paddingTop:"5rem" , paddingBottom:"2rem"}}>
                            <Card.Body>
                                <Row className='' >
                                    <Col xs={12} md={8} lg={12} className=''>
                                        <div style={{ letterSpacing: "3.5px" ,maxWidth:"350px" }} className='inter-regular px-2 fs_09 border-1 border-black bg-black text-light '>
                                            EQUESTRIAN AND BEST HORSES
                                        </div>
                                    </Col>
                                </Row>
                                <Card.Title className='fs_40 inter-medium mt-3' style={{color: "#212529"}}>About Us</Card.Title>

                                {/* ✅ FIX: Replaced <Card.Text> with <div> */}
                                <div className='text-justify' style={{ lineHeight: "2rem" }}>
                                    We've personally assessed a collection of over 300 horses, and guess what?
                                    You can browse them by category to find your dream match! Each category lets
                                    you filter our horses for sale based on what matters to you. Want a gentle
                                    giant? Sort by height! Looking for a mare or gelding? Choose your preference!
                                    With easy sorting by gender, age, height, and more, finding your perfect horse is a breeze.
                                </div>
                                <Row className="mt-4">
                                    <Col xs={12} md={6}>
                                        <Image src={check} alt="Check Icon" className="img-fluid" style={{ width: 310 , height:"80px" }} />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <Image src={check1} alt="Check Icon" className="img-fluid" style={{ width: 310 , height:"80px" }} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Aboutus;
