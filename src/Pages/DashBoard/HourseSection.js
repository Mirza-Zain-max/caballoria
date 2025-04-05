import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Button, ButtonGroup, Card, Image, Container } from 'react-bootstrap';
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
    { img: Card3, id: 7 },
    { img: Card1, id: 8 },
    { img: Card2, id: 9 },
    { img: Card3, id: 10 }
];

const HouseCard = ({ img }) => (
    <Card className="h-100 border-0 shadow ">
        <Image src={img} className="img-fluid p-2" />
        <Image src={parpa} className="img-fluid p-2 mt-3" />
        <ButtonGroup className="w-100">
            <Button className="bg-transparent border-0 border-top border-1 text-dark rounded-0">Contact</Button>
            <Button className="border-0 rounded-end-1 rounded-0" style={{ background: '#4FB84F' }}>More Info</Button>
        </ButtonGroup>
    </Card>
);

export default function HouseListings() {
    return (
        <Container className='px-0'>
            <h3 className="my-4 inter-medium fs_20" style={{ color: '#4FB84F' }}>13 Results Showing:</h3>
            <div className='custom-slider'>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {cardData.map((item) => (
                        <SwiperSlide style={{ maxWidth: 380 }} key={item.id}>
                            <HouseCard img={item.img} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
}