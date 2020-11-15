import React from "react";
import logo from '../logo.svg';
import { Navbar, Nav, Button, Container, OverlayTrigger, Popover, Row, Col } from "react-bootstrap";
import payroll from '../images/PopoverIcons/payroll.svg';
import talent from '../images/PopoverIcons/talent.svg';
import recruitment from '../images/PopoverIcons/recruitment.svg';
import employee from '../images/PopoverIcons/employee.svg';
import leave from '../images/PopoverIcons/leave.svg';
import mobileApp from '../images/PopoverIcons/mobile-app.svg';
import story from '../images/PopoverIcons/story.svg';
import team from '../images/PopoverIcons/team.svg';
import awards from '../images/PopoverIcons/awards.svg';

function Navigationbar() {
  return (
    <div className="navBar">
      <Container>
        <Navbar variant="light" expand="lg" className="px-0 pb-5">
          <Navbar.Brand href="#home"><img src={logo} alt='' /></Navbar.Brand>        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
            <Nav.Link className="p-0" href="">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-positioned-bottom1" style={{maxWidth: '800px'}}>
                    <Popover.Content>
                      <Row className='border-bottom'>
                        <Col xs={2} className="pl-1">
                          <img src={payroll} alt="" className=" mt-1"/>
                        </Col>
                        <Col xs={10}>
                          <h6 className="text-uppercase mb-0 mt-2">Payroll Module</h6>
                          <p className="text-truncate">Global payroll and compliance</p>
                        </Col>
                      </Row>
                      <Row className='border-bottom'>
                        <Col xs={2} className="pl-1">
                          <img src={talent} alt="" className=" mt-1"/>
                        </Col>
                        <Col xs={10}>
                          <h6 className="text-uppercase mb-0 mt-2">TALENT TRANSFORMATION</h6>
                          <p className="text-truncate">Performance management system</p>
                        </Col>
                      </Row>
                      <Row className='border-bottom'>
                        <Col xs={2} className="pl-1">
                          <img src={recruitment} alt="" className=" mt-1"/>
                        </Col>
                        <Col xs={10}>
                          <h6 className="text-uppercase mb-0 mt-2">TALENT ACQUISITION & ONBOARDING</h6>
                          <p className="text-truncate">Centralised talent pipeline</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={2} className="pl-1">
                          <img src={employee} alt="" className=" mt-1"/>
                        </Col>
                        <Col xs={10}>
                          <h6 className="text-uppercase mb-0 mt-2">TALENT MANAGEMENT</h6>
                          <p className="text-truncate">Human resourse information system</p>
                        </Col>
                      </Row>
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button variant="link" className="text-decoration-none popoverButton mx-4">WHAT</Button>
              </OverlayTrigger>
            </Nav.Link>
            <Nav.Link className="p-0" href="">
            <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-positioned-bottom2" style={{maxWidth: '800px'}}>
                    <Popover.Content>
                    <Row className='border-bottom'>
                        <Col xs={2} className="pl-1">
                          <img src={recruitment} alt="" className=" mt-1"/>
                        </Col>
                        <Col xs={10}>
                          <h6 className="text-uppercase mb-0 mt-2">HIRING & ONBOARDING</h6>
                          <p className="text-truncate">Applicant hiring & tracking</p>
                        </Col>
                      </Row>
                      <Row className='border-bottom'>
                        <Col xs={2} className="pl-1">
                          <img src={payroll} alt="" className=" mt-1"/>
                        </Col>
                        <Col xs={10}>
                          <h6 className="text-uppercase mb-0 mt-2">HRIS & PAYROLL</h6>
                          <p className="text-truncate">Centralized dashboard</p>
                        </Col>
                      </Row>
                      <Row className='border-bottom'>
                        <Col xs={2} className="pl-1">
                          <img src={leave} alt="" className=" mt-1"/>
                        </Col>
                        <Col xs={10}>
                          <h6 className="text-uppercase mb-0 mt-2">TIME & ABSENCE TRACKING</h6>
                          <p className="text-truncate">Monitor every employee activity</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={2} className="pl-1">
                          <img src={mobileApp} alt="" className=" mt-1"/>
                        </Col>
                        <Col xs={10}>
                          <h6 className="text-uppercase mb-0 mt-2">MOBILE APP & MORE</h6>
                          <p className="text-truncate">Get everything at your hands</p>
                        </Col>
                      </Row>
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button variant="link" className="text-decoration-none popoverButton mx-4">WHY</Button>
              </OverlayTrigger>
            </Nav.Link>
            <Nav.Link className="p-0" href="">
            <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-positioned-bottom3" style={{maxWidth: '800px'}}>
                    <Popover.Content>
                    <Row className='border-bottom'>
                        <Col xs={2} className="pl-1">
                          <img src={story} alt="" className=" mt-1"/>
                        </Col>
                        <Col xs={10}>
                          <h6 className="text-uppercase mb-0 mt-2">OUR STORY</h6>
                          <p className="text-truncate">How we reached here</p>
                        </Col>
                      </Row>
                      <Row className='border-bottom'>
                        <Col xs={2} className="pl-1">
                          <img src={team} alt="" className=" mt-1"/>
                        </Col>
                        <Col xs={10}>
                          <h6 className="text-uppercase mb-0 mt-2">OUR TEAM</h6>
                          <p className="text-truncate">Our biggest strengths</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={2} className="pl-1">
                          <img src={awards} alt="" className=" mt-1"/>
                        </Col>
                        <Col xs={10}>
                          <h6 className="text-uppercase mb-0 mt-2">OUR ACCOLADES</h6>
                          <p className="text-truncate">What people are saying about us</p>
                        </Col>
                      </Row>
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button variant="link" className="text-decoration-none popoverButton mx-4">WHO</Button>
              </OverlayTrigger>
            </Nav.Link>
            <Button variant="danger" className="rounded-pill">TRY IT FOR FREE</Button>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navigationbar;
