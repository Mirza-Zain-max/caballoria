import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import logo from "../../Pages/Icons/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <Container>
        <Row className="mb-4 text-center text-md-start">
          {/* Logo & Socials */}
          <Col xs={12} md={4}>
            <div className="d-flex flex-column align-items-center align-items-md-start mb-3">
              <img src={logo} alt="Logo" className="mb-2" style={{ width: "320px" }} />
            </div>
            <p className="text-center text-md-start">A Noble Horse makes every Rider a King.</p>
            <div className="d-flex justify-content-center justify-content-md-start mt-4">
              <Button variant="dark" className="me-2 rounded-circle">
                <Facebook size={18} />
              </Button>
              <Button variant="dark" className="me-2 rounded-circle">
                <Twitter size={18} />
              </Button>
              <Button variant="dark" className="me-2 rounded-circle">
                <Instagram size={18} />
              </Button>
              <Button variant="dark" className="rounded-circle">
                <Youtube size={18} />
              </Button>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={3} className="mt-4 mt-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled text-center text-md-start">
              <li className="mb-2"><span  className="text-white text-decoration-none">About Us</span></li>
              <li className="mb-2"><span  className="text-white text-decoration-none">Coming Soon</span></li>
              <li className="mb-2"><span  className="text-white text-decoration-none">FAQ</span></li>
              <li className="mb-2"><span  className="text-white text-decoration-none">Pricing</span></li>
              <li><span className="text-white text-decoration-none">Contact</span></li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col xs={12} md={2} className="mt-4 mt-md-0 text-center text-md-start">
            <h5 className="mb-3">Contacts</h5>
            <p className="mb-2">
              <span style={{color:"#4FB84F"}}>Email:</span><br />
              <a href="mailto:Info@Caballoria.Com" className="text-white text-decoration-none">Info@Caballoria.Com</a>
            </p>
            <p className="mb-2">
              <span style={{color:"#4FB84F"}}>Phone:</span><br />
              <a href="tel:+4917449477111" className="text-white text-decoration-none">+49 174 494 77 11</a>
            </p>
            <p>
              <span style={{color:"#4FB84F"}}>Phone:</span><br />
              <a href="tel:+34722340308" className="text-white text-decoration-none">+34 722 340 308</a>
            </p>
          </Col>

          {/* Newsletter */}
          <Col xs={12} md={3} className="mt-4 mt-md-0 text-center text-md-start">
            <h5 className="mb-3">SUBSCRIBE TO OUR NEWSLETTER</h5>
            <p className="mb-3">*Only valuable resource no bullshit</p>
            <Form>
              <div className="d-flex flex-column flex-sm-row align-items-center">
                <Form.Control
                  type="email"
                  placeholder="Enter your e-mail"
                  className=" text-white border-secondary rounded-pill mb-2 mb-sm-0 me-sm-2 w-100"
                />
                {/* <Button
                  variant="white"
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                >
                  <ArrowRight size={30} className="text-dark border-3 bg-light rounded-5" />
                </Button> */}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
