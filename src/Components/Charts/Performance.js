import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import goalPlaning from '../../images/chart/Performance&Talent/goal-planing.png';
import feedback from '../../images/chart/Performance&Talent/feedback.png';
import talentReview from '../../images/chart/Performance&Talent/talent-review.png';
import talentAppraisal from '../../images/chart/Performance&Talent/talent-appraisal.png';

function Performance() {
    return (
        <div className="performance">
            <Container>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <div className="mt-5">
                            <Nav defaultActiveKey="tab-1" className="flex-column">
                                <Nav.Link eventKey="tab-1" className="mt-5">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Performance&Talent"><ArrowForwardRoundedIcon /> Transformation Goal Planning </Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-2">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Performance&Talent/On-going-Feedback&Coaching"><ArrowForwardRoundedIcon /> On-going Feedback & Coaching</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-3">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Performance&Talent/Talent-Monitoring&Review"><ArrowForwardRoundedIcon /> Talent Monitoring & Review</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-4">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Performance&Talent/Talent-Appraisal"><ArrowForwardRoundedIcon /> Talent Appraisal</Link>
                                    </h5>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Route path="/home/Performance&Talent" exact>
                            <img src={goalPlaning} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Performance&Talent/On-going-Feedback&Coaching">
                            <img src={feedback} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Performance&Talent/Talent-Monitoring&Review">
                            <img src={talentReview} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Performance&Talent/Talent-Appraisal">
                            <img src={talentAppraisal} className="img-fluid" alt="" />
                        </Route>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Performance
