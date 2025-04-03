// import React from 'react'
// import { Card, Col, Container, Image, Row } from 'react-bootstrap'
// import Textpar from "../Assets/Image/text.png"
// import Gropu from "../Assets/Image/Group.png"


// const Section6 = () => {
//     return (
//         <main >
//             <Container className='my-5'  >
//                 <Row>
//                     <Col sm={12} md={12} lg={6} style={{ background: " #212529" }}>
//                         <Card className='bg-transparent p-4'>
//                             <h1 className='text-light my-5'>
//                                 <h6 className='text-success bg-white w-25 text-center'>Our Work</h6>
//                                 Horse Selling Guide
//                             </h1>
//                             <Image src={Textpar} />
//                         </Card>
//                     </Col>
//                     <Col sm={12} md={12} lg={6} style={{ background: " #fff" }}>
//                         <Image src={Gropu} />
//                     </Col>
//                 </Row>
//             </Container>
//         </main>
//     )
// }

// export default Section6


// import React from 'react';
// import { Card, Col, Container, Image, Row } from 'react-bootstrap';
// import Textpar from "../Assets/Image/text.png";
// import Gropu from "../Assets/Image/Group.png";

// const Section6 = () => {
//     return (
//         <main  style={{background: "#fff"}}>
//             <Container className='my-5'>
//                 <Row className='align-items-center'>
//                     <Col xs={12} lg={6} className='bg-dark text-light p-4'>
//                         <Card className='bg-transparent border-0'>
//                             <h1 className='my-4 '>
//                                 <h6 className='text-success bg-white d-inline-block px-3 py-1 rounded'>Our Work</h6>
//                                 Horse Selling Guide
//                             </h1>
//                             <Image src={Textpar} fluid />
//                         </Card>
//                     </Col>
//                     <Col xs={12} lg={6} className='bg-white text-center p-4' style={{backgroundColor:"#fff"}}>
//                         <Image src={Gropu} className='img-fluid' />
//                     </Col>
//                 </Row>
//             </Container>
//         </main>
//     );
// }

// export default Section6;


import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import Textpar from "../Assets/Image/text.png";
import Gropu from "../Assets/Image/Group.png";

const Section6 = () => {
    return (
        <main style={{ background: "#fff" }}>
            <Container fluid className='my-5'>
                <Row className='align-items-center'>
                    <Col xs={12} lg={6} className='bg-dark text-light p-4'>
                        <Card className='bg-transparent p-2 border-0'>
                            {/* Fix: Separate <h6> from <h1> */}
                            <span style={{color:"#4FB84F" ,width:"100px"}} className=' fs_09 bg-white d-inline-block px-3 py-1  inter-medium rounded-0'>Our Work</span>
                            <span className='my-4 fs_38 text-light inter-bold'>Horse Selling Guide</span>
                            <Image src={Textpar} fluid />
                        </Card>
                    </Col>
                    <Col xs={12} lg={6} className='bg-white text-center p-4' style={{ backgroundColor: "#fff" }}>
                        <Image src={Gropu} className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Section6;
