import React, { useState } from "react";
import { Navbar, Nav, Container, Image, Button, Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/Navbar";
import './header.css'
import Logo from "../../Pages/Icons/logo.png";
import Shop from "../../Pages/Icons/shop.png";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const [language, setLanguage] = useState("English");

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };
    return (
        <Navbar expand="lg" expanded={expanded} style={{ backgroundColor: "transparent", fontSize: "14.4px" }}>
            <Container>
                <Navbar.Brand>
                    <NavLink to="/" className="nav-link" onClick={() => setExpanded(false)}>
                        <Image src={Logo} className="img-fluid image mt-1 me-2" alt="Logo" />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} className="ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`me-auto mt-1 gap-2 ${expanded ? "text-center w-100" : ""}`}>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} onClick={() => setExpanded(false)} >
                            HOME
                        </NavLink>
                        <NavLink to="/collection" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} onClick={() => setExpanded(false)} >
                            COLLECTION
                        </NavLink>
                        <NavLink to="/faq" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} onClick={() => setExpanded(false)} >
                            FAQ
                        </NavLink>
                        <NavLink to="/shop" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} onClick={() => setExpanded(false)} >
                            SHOP
                        </NavLink>
                        <NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} onClick={() => setExpanded(false)} >
                            BLOG
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} onClick={() => setExpanded(false)} >
                            CONTACT
                        </NavLink>
                    </Nav>
                    <Nav className={`me-auto  ${expanded ? "w-100 d-flex flex-column align-items-center" : ""}`}>
                        <NavLink to="/product" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} onClick={() => setExpanded(false)}>
                            <Image src={Shop} className="img-fluid" alt="Shop" />
                        </NavLink>
                        <Button className="bg-transparent border-0">
                            <span className="text-dark">Login</span> <FaUserCircle className="fs-4" style={{ color: "#4FB84F" }} />
                        </Button>
                        <Dropdown>
                            <Dropdown.Toggle className="bg-transparent mt-2" variant="light" id="dropdown-basic">
                                {language}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleLanguageChange("English")}>English</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleLanguageChange("اردو")}>اردو</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;
