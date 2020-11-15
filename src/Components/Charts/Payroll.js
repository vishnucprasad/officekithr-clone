import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import compensationBenefits from '../../images/chart/Payroll/compensation-benefits.png'
import payrollModule from '../../images/chart/Payroll/payroll-module.png'
import salarySlip from '../../images/chart/Payroll/salary-slip.png'
import integratedPayroll from '../../images/chart/Payroll/integrated-payroll.png'
import singleClickPayroll from '../../images/chart/Payroll/single-click-payroll.png'
import loan from '../../images/chart/Payroll/loan.png'
import complianceManagement from '../../images/chart/Payroll/compliance-management.png'
import { motion } from 'framer-motion';

function Payroll() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 0.3}} className="payroll">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="mt-5">
                            <Nav defaultActiveKey="tab-1" className="flex-column">
                                <Nav.Link eventKey="tab-1" className="mt-5">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Payroll"><ArrowForwardRoundedIcon /> Unlimited Pay Components Configurations </Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-2">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Payroll/Arrears&Retro-Salary-Calculations"><ArrowForwardRoundedIcon /> Arrears & Retro Salary Calculations</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-3">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Payroll/Flexible-Salary-Slip-Configurations&Scheduling"><ArrowForwardRoundedIcon /> Flexible Salary Slip Configurations & Scheduling</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-4">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Payroll/Integrated-with-Final-Settlements"><ArrowForwardRoundedIcon /> Integrated with Final Settlements, Claims, Reimbursements</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-5">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Payroll/Single-click-Payroll-Process"><ArrowForwardRoundedIcon /> Single click Payroll Process</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-6">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Payroll/Loans-and-Advances"><ArrowForwardRoundedIcon /> Loans and Advances</Link>
                                    </h5>
                                </Nav.Link>
                                <Nav.Link eventKey="tab-7">
                                    <h5>
                                        <Link className="text-dark text-decoration-none" to="/home/Payroll/Compliance-Management"><ArrowForwardRoundedIcon /> Compliance Management</Link>
                                    </h5>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col md={6} className="overflow-hidden">
                        <Route path="/home/Payroll" exact>
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={compensationBenefits} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Payroll/Arrears&Retro-Salary-Calculations">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={payrollModule} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Payroll/Flexible-Salary-Slip-Configurations&Scheduling">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={salarySlip} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Payroll/Integrated-with-Final-Settlements">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={integratedPayroll} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Payroll/Single-click-Payroll-Process">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={singleClickPayroll} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Payroll/Loans-and-Advances">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={loan} className="img-fluid" alt="" />
                        </Route>
                        <Route path="/home/Payroll/Compliance-Management">
                            <motion.img initial={{x: 400}} animate={{x: 0}} src={complianceManagement} className="img-fluid" alt="" />
                        </Route>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Payroll
