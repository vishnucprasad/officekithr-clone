import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../logo.svg";
import appStore from "../images/appstore.png";
import playStore from "../images/playstore.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
  return (
    <div className="footer bg-light pt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h4>India</h4>
            <p>
              Ground floor, Cyber Park Calicut - 673 016 +91 8089 629420
              hello@officekithr.com
            </p>
          </Col>
          <Col md={3}>
            <h4>Middle East</h4>
            <p>
              #906, Palace Towers Dubai Silicon Oasis Dubai, UAE +971 4333 3688
              hello@officekithr.com
            </p>
          </Col>
          <Col md={3}>
            <h4>USA</h4>
            <p>
              808 W 65thSt Los Angeles, CA +1(626)5456131 hello@officekithr.com
            </p>
          </Col>
          <Col md={3}>
            <h4>Australia</h4>
            <p>Sydney Australia +61 402602979 hello@officekithr.com</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={3}>
            <img src={logo} alt="" />
            <h4 className="mt-3">Your People Our passion</h4>
          </Col>
          <Col md={3}>
            <div className="text-uppercase links">
              <div className="mb-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Company
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  About Us
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Careers
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Events
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Contact us
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Blog
                </a>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-uppercase links">
              <div className="mb-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Product
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Partnership
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Pricing
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Resources
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Features List
                </a>
              </div>
            </div>
          </Col>
          <Col md={3}>
              <h4>Download App</h4>
              <a href="https://apps.apple.com/in/app/officekit-app/id1382735899" target="_blank" rel="noopener noreferrer">
                  <img src={appStore} alt=""/>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.officekit" target="_blank" rel="noopener noreferrer">
                  <img src={playStore} alt=""/>
              </a>
              <h4 className="mt-3">Connect us</h4>
              <a href="http://" target="_blank" rel="noopener noreferrer" className="socialLinks mr-2">
                  <FacebookIcon />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className="socialLinks mr-2 text-danger">
                  <InstagramIcon />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className="socialLinks mr-2">
                  <LinkedInIcon />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className="socialLinks mr-2 text-info">
                  <TwitterIcon />
              </a>
          </Col>
        </Row>
        <Row className="py-5">
            <Col md={12}>
                <p>© Copyright Officekit HR 2012-2020</p>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
