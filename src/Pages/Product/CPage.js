import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Container, Row, Col, Image, Button, Card, Modal, Form, Tab, Tabs
} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Cadr from '../Assets/Image/course.png';
import Cadr1 from '../Assets/Image/course1.png';
import Cadr2 from '../Assets/Image/course2.png';
import top from '../Assets/Image/BlogImage.png';
import MainLayout from '../../Components/mainLayout/mainLayout';

import './ProductDetail.css'; // 👈 Link your CSS file here

const ProductDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = () => {
        alert(`Added ${quantity} item(s) to cart`);
    };

    const handleQuickView = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    if (!state) return <p>No product data available.</p>;

    const { img, title, price } = state;

    const allProducts = [
        { title: 'Senior Fit', price: 'From €18.00', img: Cadr },
        { title: 'Itching', price: 'From €18.00', img: Cadr1 },
        { title: 'Colic Vital', price: 'From €18.00', img: Cadr2 },
        { title: 'Intensital Water', price: 'From €18.00', img: Cadr },
        { title: 'Senior Fit', price: 'From €18.00', img: Cadr1 },
        { title: 'Itching', price: 'From €18.00', img: Cadr2 },
    ];

    const relatedProducts = allProducts.filter((item) => item.title !== title);

    return (
        <MainLayout isTransparent={true}>
            <div className="blog-image-container">
                <Image src={top} className="img-fluid blog-image" />
                <div className="text-center blog-text">
                    <div>
                        <h1 className="text-light fs_39 inter-medium">Product Details</h1>
                        <h2 className="fs_09 text-light">Home / Herbs / {title}</h2>
                    </div>
                </div>
            </div>

            <Container className="mt-5">
                {/* Product Image & Info */}
                <Row className="my-5">
                    <Col xs={12} md={6} className="mb-4 mb-md-0">
                        <Image src={img} fluid />
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>{title}</h2>
                        <hr />
                        <h5 className='fs_09' style={{ color: "#4FB84F" }}>{price}</h5>
                        <p className='text-muted'>
                            There are many variations of passages of Lorem Ipsum available...
                        </p>
                        <p className='fs_09' style={{ color: "#4FB84F" }}>30 in stock</p>

                        <Row className="align-items-center mb-3">
                            <Col xs={5} sm={4} md={3}>
                                <Form.Control
                                    type="number"
                                    value={quantity}
                                    min="1"
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </Col>
                            <Col xs={7} sm={8} md={6}>
                                <Button
                                    style={{ backgroundColor: "#4FB84F" }}
                                    className="border-0 mt-2 mt-md-0"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </Button>
                            </Col>
                        </Row>

                        <span className='text-muted'>
                            <div>Category: Pencil</div>
                            <div>Tags: Prints</div>
                        </span>
                    </Col>
                </Row>

                {/* Tabs Section */}
                <Row className="my-5">
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Tabs defaultActiveKey="description" id="product-tabs" className="mb-3 custom-tabs">
                                    <Tab eventKey="description" title="Description">
                                        <h5>Description</h5>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                                        </p>
                                    </Tab>
                                    <Tab eventKey="reviews" title="Reviews (0)">
                                        <h5>Reviews</h5>
                                        <p>No reviews yet.</p>
                                    </Tab>
                                    <Tab eventKey="ingredients" title="Ingredients">
                                        <h5>Ingredients</h5>
                                        <p>List of herbal ingredients...</p>
                                    </Tab>
                                    <Tab eventKey="application" title="Application">
                                        <h5>Application</h5>
                                        <p>How to use this product effectively...</p>
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Related Products */}
                {/* <Row className="my-5">
                    <h4 className="mb-3">Related Products</h4>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={15}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {relatedProducts.map((card, i) => (
                            <SwiperSlide key={i} style={{ maxWidth: '20rem' }}>
                                <Card className="mt-2">
                                    <Image src={card.img} className="img-fluid" />
                                    <div className="p-3 text-start">
                                        <h5>{card.title}</h5>
                                        <p>{card.price}</p>
                                        <span
                                            style={{ color: '#4FB84F', cursor: 'pointer' }}
                                            onClick={() => handleQuickView(card)}
                                        >
                                            Quick View &gt;
                                        </span>
                                    </div>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Row> */}
                <Row className="my-5">
                    <h4 className="mb-3">Related Products</h4>
                    <div className="custom-slider">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={15}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {relatedProducts.map((card, i) => (
                                <SwiperSlide key={i} style={{ maxWidth: '20rem' }}>
                                    <Card className="mt-4">
                                        <Image src={card.img} className="img-fluid" />
                                        <div className="p-3 text-start">
                                            <h5>{card.title}</h5>
                                            <p>{card.price}</p>
                                            <span
                                                style={{ color: '#4FB84F', cursor: 'pointer' }}
                                                onClick={() => handleQuickView(card)}
                                            >
                                                Quick View &gt;
                                            </span>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Row>
            </Container>
            {/* Quick View Modal */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <Image src={selectedProduct?.img} className="img-fluid" />
                        </Col>
                        <Col md={6}>
                            <h4>{selectedProduct?.title}</h4>
                            <p>{selectedProduct?.price}</p>
                            <p>Including VAT excl. Shipping Costs</p>
                            <p>
                                This product is designed to provide relief and improve well-being during transitions...
                            </p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </MainLayout>
    );
};

export default ProductDetail;
