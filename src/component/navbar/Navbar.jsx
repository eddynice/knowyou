import React from 'react';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';

export default function Heading() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/"> <b>Artist Search</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
