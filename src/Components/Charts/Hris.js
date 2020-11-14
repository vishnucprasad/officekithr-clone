import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import employeeProfileMmanagement from '../../images/chart/HRIS/employee-profile-management.png';
import employeeDocManagement from '../../images/chart/HRIS/employee-doc-management.png';
import employeeRewards from '../../images/chart/HRIS/employee-rewards.png';
import exitAndManagement from '../../images/chart/HRIS/exit-management.png';
import training from '../../images/chart/HRIS/training.png';
import travel from '../../images/chart/HRIS/travel-view.png';
import workflow from '../../images/chart/HRIS/workflow.png';
import employeeSelfService from '../../images/chart/HRIS/ess.png';

function Hris() {
    return (
        <div className="HRIS">
            <Container>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <div className="mt-5">
                            <Nav defaultActiveKey="tab-1" className="flex-column">
                                <Nav.Link eventKey="tab-1" className="mt-5">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/HRIS"><ArrowForwardRoundedIcon /> Employee Profile Management </Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-2">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/HRIS/Employee-Doc-Management"><ArrowForwardRoundedIcon /> Employee Doc Management</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-3">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/HRIS/Rewards-and-Recognitions"><ArrowForwardRoundedIcon /> Rewards and Recognitions</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-4">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/HRIS/Exits&Separation-Management"><ArrowForwardRoundedIcon /> Exits & Separation Management</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-5">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/HRIS/Training"><ArrowForwardRoundedIcon /> Training</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-6">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/HRIS/Travel"><ArrowForwardRoundedIcon /> Travel</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-7">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/HRIS/Workflows"><ArrowForwardRoundedIcon /> Workflows</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-8">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/HRIS/Employee-Self-Service-Portal"><ArrowForwardRoundedIcon /> Employee Self Service Portal</Link>
                                    </h5>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Route path="/home/HRIS" exact>
                            <img src={employeeProfileMmanagement} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Employee-Doc-Management">
                            <img src={employeeDocManagement} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Rewards-and-Recognitions">
                            <img src={employeeRewards} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Exits&Separation-Management">
                            <img src={exitAndManagement} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Training">
                            <img src={training} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Travel">
                            <img src={travel} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Workflows">
                            <img src={workflow} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Employee-Self-Service-Portal">
                            <img src={employeeSelfService} className="img-fluid" alt="" />
                        </Route>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hris
