import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Nav, Container, Offcanvas,  Image, Button } from 'react-bootstrap'
import './navbar.css'
import { Menu } from 'react-feather';
import {  NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Logo from '../../Pages/Icons/logo.png';
import WhiteLogo from "../../Pages/Icons/Frame 7.png"
import Shop from '../../Pages/Icons/shop.png';
import Shope from '../../Pages/Icons/shope.png';

function ScrollHandler({ isTransparent }) {
    const prevScrollY = useRef(0);


    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            const scrollPosition = window.scrollY;
            if (scrollPosition > prevScrollY.current) {
                navbar.style.top = '-80px';
            } else {
                navbar.style.top = '0';
            }
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                isTransparent && navbar.classList.remove('bg-transparent')
                navbar.classList.add('nav_shadow')
            } else {
                isTransparent && navbar.classList.add('bg-transparent')
                navbar.classList.remove('nav_shadow')
            }
            prevScrollY.current = scrollPosition;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return null;
}
const NavHeader = ({ isTransparent = false }) => {
    // const [expanded, setExpanded] = useState(false);
    // const [language, setLanguage] = useState("English");

    // const handleLanguageChange = (lang) => {
    //     setLanguage(lang);
    // };
    const navItems = [
        { name: 'HOME', path: "/" },
        { name: 'COLLECTION', path: "/collection" },
        { name: 'FQS', path: "/fqs" },
        { name: 'SHOP', path: "/shop" },
        { name: 'BLOG', path: "/blog" },
        { name: 'CONTACT', path: "/contact" },
    ]

    const [activeId, setActiveId] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleActive = (itemId) => {
        setActiveId(itemId);
        handleClose()
    };

    return (
        <>
            <ScrollHandler />
            <Navbar bg="white" expand="lg" fixed='top' className={`main_nav  ${isTransparent && 'bg-transparent'} px-sm-4 px-3 py-2 fs_10`} id="navbar">
                <Container fluid="xxl" className='px-sm-3 px-0 ' >
                    <Navbar.Brand className='max-w-[176px]' >
                        <NavLink to='/' style={{ textDecoration: "none" }} className='' >
                            {isTransparent ?
                                <Image src={WhiteLogo} className=" image " alt="Logo" /> :
                                <Image src={Logo} className=" image " alt="Logo" />
                            }
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={handleShow} className='ms-auto mb-3 border-0 p-0 mb-0' style={{
                        fontSize: "13px",
                        paddingInline: "6px",
                    }} >
                        <Menu className='menu' />
                    </Navbar.Toggle>
                    <Nav className={`nav_link ms-lg-auto gap-lg-4 d-none d-lg-flex ${isTransparent ? 'text-white' : 'text-dark'}`} >
                        {navItems.map((items, index) => (
                            <NavLink className={''} onClick={() => handleActive(index)} key={index} to={items.path}>
                                <span className=''>
                                    {items.name}
                                </span>
                            </NavLink>
                        ))}
                    </Nav>
                    <Nav className={`ms-auto`}>
                        <span to="/shop1" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")} >
                            {
                                isTransparent ?
                                    <Image src={Shope} className="img-fluid" alt="Shop" /> :
                                    <Image src={Shop} className="img-fluid" alt="Shop" />
                            }
                            <span className={`${isTransparent ? 'text-white' : "text-dark"}`}>|</span>
                        <Button className={`bg-transparent border-0  ${isTransparent ? 'text-white' : "text-dark"}`}>
                            <span className="">Login</span> <FaUserCircle className="fs-4" style={{ color: "#4FB84F" }} />
                        </Button>
                        </span>
                    <hr className='text-white' />
                    </Nav>
                    <Nav className='min-[992px]:min-w-[190px] d-lg-none'>
                        <Offcanvas show={show} onHide={handleClose} placement={'top'} className="main_nav bg-white pb-3">
                            <Offcanvas.Header  closeButton>
                            </Offcanvas.Header>
                            <Nav className='nav_link fs_10 justify-content-center align-items-center  gap-3' >
                                {navItems.map((items, index) => (
                                    <NavLink className={''} onClick={() => handleActive(index)}
                                        key={index} to={items.path}>
                                        <span className=''>
                                            {items.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </Nav>
                        </Offcanvas>
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}

export default NavHeader
