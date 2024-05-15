import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

import "./Header.style.scss";

const Header = () => {
  const [scrollY, setScrollY] = useState(window.scrollY || 0);
  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);

  useEffect(() => {
    const handlerScroll = window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, [scrollY]);

  const isHeaderFixed = scrollY >= 25 ? "fixed" : "";
  const hamburguerMenuClassName = isHamburgerMenuVisible ? "visible" : "";

  return (
    <Navbar className={`header ${isHeaderFixed}`}>
      <Container>
        <Navbar.Brand className="me-auto" href="#home">
          <img src="GM.png" alt="logo" />
        </Navbar.Brand>
        <Nav className="me-auto menu-bar">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Works</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#pricing" className="link-btn">
            Let's talk
          </Nav.Link>
        </Nav>
        <Nav
          className="hamburger-menu"
          onClick={() => setIsHamburgerMenuVisible(!isHamburgerMenuVisible)}
        >
          <RiMenu3Fill className={`${hamburguerMenuClassName} hamburger`} />
          <IoCloseOutline className={`${hamburguerMenuClassName} close`} />
        </Nav>
        <Nav className={`hamburger-menu-container ${hamburguerMenuClassName}`}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Works</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
