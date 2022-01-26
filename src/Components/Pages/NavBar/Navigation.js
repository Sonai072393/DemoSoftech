import React from "react";

import { BrowserRouter as Routes, Link } from "react-router-dom";

//css
import style from "../NavBar/navbar.module.css";

//bootstrap
import { Nav, Navbar, Container } from "react-bootstrap";

//image
import logo from "../../UI/Img/softechsolutions_logo.png";

const NavBar = () => {
  return (
    <Routes>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className={style.nav}
      >
        <Container>
          <img src={logo} className={style.brand_logo} alt="logo" />
          {/* <Navbar.Brand href="#home" className={style.brand}>
          
          Softech ERP
        </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" bg="dark" variant="dark">
            <Nav className={style.nav_link}>
              <Nav.Link href="#features" className={style.nav_link_text}>
                <Link to="/Home" className={style.link}>
                  {" "}
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className={style.nav_link_text}>
                <Link to="/About" className={style.link}>
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link className={style.nav_link_text}>
                <Link to="/About" className={style.link}>
                  Partners
                </Link>
              </Nav.Link>
              <Nav.Link className={style.nav_link_text}>
                <Link to="/About" className={style.link}>
                  Clients
                </Link>
              </Nav.Link>
              <Nav.Link className={style.nav_link_text}>
                <Link to="/About" className={style.link}>
                  PortFolio
                </Link>
              </Nav.Link>
              <Nav.Link className={style.nav_link_text}>
                <Link to="/About" className={style.link}>
                  Careers
                </Link>
              </Nav.Link>
              <Nav.Link className={style.nav_link_text}>
                <Link to="/About" className={style.link}>
                  Contacts
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Routes>
  );
};

export default NavBar;
