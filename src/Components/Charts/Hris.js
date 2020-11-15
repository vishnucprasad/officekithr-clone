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
import { motion } from 'framer-motion';

function Hris() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 0.3}} className="HRIS">
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
                    <Col md={6} className="overflow-hidden">
                        <Route path="/home/HRIS" exact>
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={employeeProfileMmanagement} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Employee-Doc-Management">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={employeeDocManagement} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Rewards-and-Recognitions">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={employeeRewards} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Exits&Separation-Management">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={exitAndManagement} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Training">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={training} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Travel">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={travel} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Workflows">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={workflow} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/HRIS/Employee-Self-Service-Portal">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={employeeSelfService} className="img-fluid" alt="" />
                        </Route>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Hris
