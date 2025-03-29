import React from "react";
import { Button, ButtonGroup, Card, Col, Container, Image, Row, Carousel } from "react-bootstrap";
import Card1 from "../Assets/Image/Rectangle 30.png";
import Card2 from "../Assets/Image/Rectangle 31.png";
import Card3 from "../Assets/Image/Rectangle 32.png";
import parpa from "../Assets/Image/parp.png";

const cardData = [
    { img: Card1, id: 1 },
    { img: Card2, id: 2 },
    { img: Card3, id: 3 },
    { img: Card1, id: 4 },
    { img: Card1, id: 5 },
    { img: Card2, id: 6 },
    { img: Card3, id: 7 },
    { img: Card1, id: 8 },
    { img: Card2, id: 9 },
    { img: Card3, id: 10 },
    { img: Card2, id: 7 },
    { img: Card1, id: 8 },
];

const HouseCard = ({ img }) => (
    <Col lg={3} md={6} sm={12} className="mb-4 d-flex justify-content-center">
        <Card className="h-100 border-0 shadow-sm" style={{ width: "100%", maxWidth: "270px" }}>
            <Image src={img} className="img-fluid" />
            <Image src={parpa} className="img-fluid mt-3" />
            <ButtonGroup className="w-100">
                <Button className="bg-transparent border-0 border-top border-1 text-dark rounded-0">
                    Contact
                </Button>
                <Button className="border-0 rounded-end-1 rounded-0" style={{ background: "#4FB84F" }}>
                    More Info
                </Button>
            </ButtonGroup>
        </Card>
    </Col>
);

const HouseSection = () => {
    const chunkArray = (arr, size) => {
        return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
    };

    const cardSlides = {
        lg: chunkArray(cardData, 4), // 4 cards per slide on large screens
        md: chunkArray(cardData, 2), // 2 cards per slide on medium screens
        sm: chunkArray(cardData, 1), // 1 card per slide on small screens
    };

    return (
        <main className="mb-5">
            <Container>
                <h3 className="p-5" style={{ color: "#4FB84F" }}>13 Results Showing:</h3>
                <Carousel
                    indicators={false}
                    interval={3000}
                    nextIcon={<span className="carousel-control-next-icon" style={{ backgroundColor: "#4FB84F", borderRadius: "50%" }} />}
                    prevIcon={<span className="carousel-control-prev-icon" style={{ backgroundColor: "#4FB84F", borderRadius: "50%" }} />}
                >
                    {/* Responsive rendering based on screen size */}
                    {window.innerWidth >= 992
                        ? cardSlides.lg.map((slide, index) => (
                            <Carousel.Item key={index}>
                                <Row className="justify-content-center">
                                    {slide.map((item) => (
                                        <HouseCard key={item.id} img={item.img} />
                                    ))}
                                </Row>
                            </Carousel.Item>
                        ))
                        : window.innerWidth >= 768
                            ? cardSlides.md.map((slide, index) => (
                                <Carousel.Item key={index}>
                                    <Row className="justify-content-center">
                                        {slide.map((item) => (
                                            <HouseCard key={item.id} img={item.img} />
                                        ))}
                                    </Row>
                                </Carousel.Item>
                            ))
                            : cardSlides.sm.map((slide, index) => (
                                <Carousel.Item key={index}>
                                    <Row className="justify-content-center">
                                        {slide.map((item) => (
                                            <HouseCard key={item.id} img={item.img} />
                                        ))}
                                    </Row>
                                </Carousel.Item>
                            ))}
                </Carousel>
            </Container>
        </main>
    );
};

export default HouseSection;
