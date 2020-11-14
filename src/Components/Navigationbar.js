import React from "react";
import logo from '../logo.svg'
import { Navbar, Nav, Button, Container } from "react-bootstrap";

function Navigationbar() {
  return (
    <div className="navBar bg-light">
      <Container>
        <Navbar bg="light" variant="light" className="px-0 pb-5">
          <Navbar.Brand href="#home"><img src={logo} alt=''/></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className="px-4" href="">WHAT</Nav.Link>
            <Nav.Link className="px-4" href="">WHY</Nav.Link>
            <Nav.Link className="px-4" href="">WHO</Nav.Link>
            <Button variant="danger" className="rounded-pill">TRY IT FOR FREE</Button>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navigationbar;
