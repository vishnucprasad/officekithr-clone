import React from "react";
import './Header.css'
import screenImage from "../images/screen.svg";
import { Button, Col, Container, Row } from "react-bootstrap";

function Header() {
  return (
    <div className="header bg-light">
      <Container>
        <Row>
          <Col md={5}>
            <h1 className="text-danger font-weight-bold heading">YOUR PEOPLE OUR PASSION</h1>
            <h4 className="tagline">The Best Talent Management Solution</h4>
            <Button variant="danger" className="rounded-pill mt-4">TRY IT FOR FREE</Button>
          </Col>
          <Col md={7}>
            <img src={screenImage} className="img-fluid mb-5" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
