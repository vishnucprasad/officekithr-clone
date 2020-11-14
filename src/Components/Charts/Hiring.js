import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import applicantTracking from '../../images/chart/Hiring&Onboarding/applicant-tracking.jpg';
import talentAcquisition from '../../images/chart/Hiring&Onboarding/talent-acquisition.jpg';
import talentOnboarding from '../../images/chart/Hiring&Onboarding/talent-onboarding.jpg';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

function Hiring() {
    return (
        <div className="hiring">
            <Container>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <div className="mt-5">
                            <Nav defaultActiveKey="tab-1" className="flex-column">
                                <Nav.Link eventKey="tab-1" className="mt-5">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Hiring&Onboarding"><ArrowForwardRoundedIcon /> Applicant Tracking </Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-2">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Hiring&Onboarding/talent-acquisition"><ArrowForwardRoundedIcon /> Talent Acquisition</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-3">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Hiring&Onboarding/talent-onboarding"><ArrowForwardRoundedIcon /> Talent Onboarding</Link>
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
