// import React from 'react'
// import { Button, Card, Col, Container, Row } from 'react-bootstrap'

// const Services = () => {
//     return (
//         <main className='my-5'   style={{background:"  #F8F7F5"}}>
//             <Container >
//                 <Row>
//                     <Col xs={12} md={6} lg={6} >
//                         <Card className='p-5' style={{background:" #212529"}}>
//                             <h3 className='text-light text-center'>My Work</h3>
//                             <span className='text-light' style={{textAlign:"center"}}>
//                                 Is characterized by a smooth horse
//                                 purchase with or without an on-site inspection. In addition, we create profession
//                                 al photos and videos of inspected sales horses according to customer requirements.
//                             </span>
//                             <Button className='bg-light text-dark border-0 w-25 justify-content-center d-flex'>
//                                 Learn More
//                             </Button>
//                         </Card>
//                     </Col>
//                     <Col xs={12} md={6} lg={6} >
//                         <Card className='p-5' style={{background: "#4FB84F"}}>
//                             <h3 className='text-light text-center'>Services</h3>
//                             <span className='text-light' style={{textAlign:"center"}}>
//                                 Is characterized by a smooth horse
//                                 purchase with or without an on-site inspection. In addition, we create profession
//                                 al photos and videos of inspected sales horses according to customer requirements.
//                             </span>
//                             <Button className='bg-light text-dark border-0 w-25 justify-content-center d-flex'>
//                                 Learn More
//                             </Button>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </main>
//     )
// }

// export default Services


import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Services = () => {
    return (
        <main className='my-5' style={{ background:  "#F5F9F5" }}>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Card className='p-5 d-flex flex-column align-items-center rounded-4' style={{ background: "#212529" }}>
                            <h3 className='text-light text-center'>My Work</h3>
                            <span className='text-light text-center'>
                                Is characterized by a smooth horse purchase with or without an on-site inspection. In addition, we create professional photos and videos of inspected sales horses according to customer requirements.
                            </span>
                            <Button className='bg-light text-dark border-0 mt-3 w-50'>
                                Learn More
                            </Button>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Card className='p-5 d-flex flex-column align-items-center rounded-4' style={{ background: "#4FB84F" }}>
                            <h3 className='text-light text-center'>Services</h3>
                            <span className='text-light text-center'>
                                Is characterized by a smooth horse purchase with or without an on-site inspection. In addition, we create professional photos and videos of inspected sales horses according to customer requirements.
                            </span>
                            <Button className='bg-light text-dark border-0 mt-3 w-50'>
                                Learn More
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Services;
