import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import applicantTracking from '../../images/chart/applicant-tracking.jpg';
import talentAcquisition from '../../images/chart/talent-acquisition.jpg';
import talentOnboarding from '../../images/chart/talent-onboarding.jpg';

function Hiring() {
    return (
        <div>
            <Container>
                <Row className="justify-content-center bg-white">
                    <Col md={3}>
                        <div className="mt-5">
                            <Nav defaultActiveKey="tab-1" className="flex-column">
                                <Nav.Link eventKey="tab-1" className="mt-5">
                                    <h5>
                                        <Link className="text-danger text-decoration-none" to="/home/Hiring&Onboarding">Applicant Tracking </Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-2">
                                    <h5>
                                        <Link className="text-danger text-decoration-none" to="/home/Hiring&Onboarding/talent-acquisition">Talent Acquisition</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-3">
                                    <h5>
                                        <Link className="text-danger text-decoration-none" to="/home/Hiring&Onboarding/talent-onboarding">Talent Onboarding</Link>
                                    </h5>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Route path="/home/Hiring&Onboarding" exact>
                            <img src={applicantTracking} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Hiring&Onboarding/talent-acquisition">
                            <img src={talentAcquisition} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Hiring&Onboarding/talent-onboarding">
                            <img src={talentOnboarding} className="img-fluid" alt="" />
                        </Route>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hiring;
