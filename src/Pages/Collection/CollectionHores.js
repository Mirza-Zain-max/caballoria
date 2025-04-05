import React from 'react';
import { Button, ButtonGroup, Card, Image, Container, Row, Col } from 'react-bootstrap';
import Card1 from '../Assets/Image/Rectangle 30.png';
import Card2 from '../Assets/Image/Rectangle 31.png';
import Card3 from '../Assets/Image/Rectangle 32.png';
import parpa from '../Assets/Image/parp.png';

const cardData = [
    { img: Card1, id: 1 },
    { img: Card2, id: 2 },
    { img: Card3, id: 3 },
    { img: Card1, id: 4 },
    { img: Card2, id: 5 },
    { img: Card1, id: 6 },
];

const HouseCard = ({ img }) => (
    <Card className="border-0 shadow">
        <Image src={img} className="img-fluid p-2" />
        <Image src={parpa} className="img-fluid p-2 mt-3" />
        <ButtonGroup className="w-100">
            <Button className="bg-transparent border-0 border-top border-1 text-dark rounded-0">Contact</Button>
            <Button className="border-0 rounded-end-1 rounded-0" style={{ background: '#4FB84F' }}>More Info</Button>
        </ButtonGroup>
    </Card>
);

export default function CollectionHouse() {
    return (
        <Container className="my-5 d-flex justify-content-center align-items-center">
            <Row className="g-4">
                {cardData.map((item) => (
                    <Col key={item.id} xs={10} sm={12} md={6} lg={4}>
                        <HouseCard img={item.img} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}