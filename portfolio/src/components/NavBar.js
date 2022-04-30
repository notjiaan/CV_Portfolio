import React from "react";
import "../css/comp-style/comp-style.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar
        className="navbar fixed-top navbar-expand-lg navbar-dark "
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="navbar-brand px-2" href="#home">
            Jiaan <span> Abad.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" navbar-nav ms-auto">
              <Nav.Link className="nav-item" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-item" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="nav-item" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="nav-item" href="#project">
                Project
              </Nav.Link>
              <Nav.Link className="nav-item" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
