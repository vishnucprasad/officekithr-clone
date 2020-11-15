import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import hrMobileApp from '../../images/chart/MobileApp&More/hr-mobile-app.png';
import geoLocationTracking from '../../images/chart/MobileApp&More/geo-location-tracking.png';
import analytics from '../../images/chart/MobileApp&More/analytics.png';
import queryBuilder from '../../images/chart/MobileApp&More/query-builder.png';
import comminucation from '../../images/chart/MobileApp&More/comminucation.png';
import { motion } from 'framer-motion';

function Mobile() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 0.3}} className="mobile">
            <Container>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <div className="mt-5">
                            <Nav defaultActiveKey="tab-1" className="flex-column">
                                <Nav.Link eventKey="tab-1" className="mt-5">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/MobileApp&More"><ArrowForwardRoundedIcon /> Mobile Application </Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-2">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/MobileApp&More/Geo-Location-Tracking"><ArrowForwardRoundedIcon /> Geo Location Tracking</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-3">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/MobileApp&More/Analytics"><ArrowForwardRoundedIcon /> Analytics</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-4">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/MobileApp&More/Query-Builders"><ArrowForwardRoundedIcon /> Query Builders</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-5">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/MobileApp&More/Employee-Communications"><ArrowForwardRoundedIcon /> Employee Communications</Link>
                                    </h5>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={6} className="overflow-hidden">
                        <Route path="/home/MobileApp&More" exact>
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={hrMobileApp} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/MobileApp&More/Geo-Location-Tracking">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={geoLocationTracking} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/MobileApp&More/Analytics">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={analytics} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/MobileApp&More/Query-Builders">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={queryBuilder} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/MobileApp&More/Employee-Communications">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={comminucation} className="img-fluid" alt="" />
                        </Route>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Mobile
