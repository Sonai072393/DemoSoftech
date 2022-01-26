// import React, { useState, useEffect } from "react";
import style from "../NavBar/navbar.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";

import logo from "../../UI/Img/softechsolutions_logo.png";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={style.nav}
    >
      <Container>
      <img src={logo} className={style.brand_logo} alt="logo"/>
        {/* <Navbar.Brand href="#home" className={style.brand}>
          
          Softech ERP
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" bg="dark" variant="dark">
          <Nav className={style.nav_link}>
            
            <Nav.Link href="#features" className={style.nav_link_text}>
              Home
            </Nav.Link>
            <Nav.Link className={style.nav_link_text}>About Us</Nav.Link>
            <Nav.Link className={style.nav_link_text}>Partners</Nav.Link>
            <Nav.Link className={style.nav_link_text}>Clients</Nav.Link>
            <Nav.Link className={style.nav_link_text}>PortFolio</Nav.Link>
            <Nav.Link className={style.nav_link_text}>Careers</Nav.Link>
            <Nav.Link className={style.nav_link_text}>Contacts</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
