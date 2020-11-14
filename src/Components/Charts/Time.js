import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import attendanceManagement from '../../images/chart/Time&AbsenceTracking/attendance-management.png';
import leaveManagement from '../../images/chart/Time&AbsenceTracking/leave-management.png';
import shiftManagement from '../../images/chart/Time&AbsenceTracking/shift-management.png';
import geoLocationTracking from '../../images/chart/Time&AbsenceTracking/geo-location-tracking.png';
import attendanceReport from '../../images/chart/Time&AbsenceTracking/attendancereport.png';

function Time() {
    return (
        <div className="time">
            <Container>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <div className="mt-5">
                            <Nav defaultActiveKey="tab-1" className="flex-column">
                                <Nav.Link eventKey="tab-1" className="mt-5">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Time&Absence-Tracking"><ArrowForwardRoundedIcon /> Attendance Management </Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-2">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Time&Absence-Tracking/Leave-Management"><ArrowForwardRoundedIcon /> Leave Management</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-3">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Time&Absence-Tracking/Shift-Management"><ArrowForwardRoundedIcon /> Shift Management</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-4">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Time&Absence-Tracking/Geo-Tagging-Based-Attendance"><ArrowForwardRoundedIcon /> Geo Tagging Based Attendance</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-5">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Time&Absence-Tracking/Integration-with-Biometric"><ArrowForwardRoundedIcon /> Integration with Biometric & Other Third Party Devices</Link>
                                    </h5>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Route path="/home/Time&Absence-Tracking" exact>
                            <img src={attendanceManagement} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Time&Absence-Tracking/Leave-Management">
                            <img src={leaveManagement} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Time&Absence-Tracking/Shift-Management">
                            <img src={shiftManagement} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Time&Absence-Tracking/Geo-Tagging-Based-Attendance">
                            <img src={geoLocationTracking} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Time&Absence-Tracking/Integration-with-Biometric">
                            <img src={attendanceReport} className="img-fluid" alt="" />
                        </Route>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Time
