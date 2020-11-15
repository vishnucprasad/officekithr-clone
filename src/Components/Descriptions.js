import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import DoneIcon from '@material-ui/icons/Done';
import locations from '../images/locations.svg';

function Descriptions() {
    return (
        <div className="descriptions">
            <div className="bg-danger text-white">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <h4 className="p-5 my-5"><QueryBuilderIcon /> Shortest Implementation Time</h4>
                        </Col>
                        <Col md={4}>
                            <div className="py-5 my-5">
                                <h4>Try and get addicted for free</h4>
                                <Button variant="outline-light" className="rounded-pill">TRY IT FOR FREE</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-5 text-center">
                <Container>
                    <div className="mb-5 text-uppercase">
                        <h4 className="p-4">Our customers love Officekit hr</h4>
                    </div>
                    <Row>
                        <Col md={4}>
                            <Card style={{ width: '20rem' }} className="py-3">
                                <Card.Body>
                                    <Card.Title>Venugopal</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Chief Executive Officer</Card.Subtitle>
                                    <Card.Text className="text-danger">Buchprufer</Card.Text>
                                    <Card.Text>
                                        We have been using Officekit HR for the last couple of years, and as our company has grown.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '20rem' }} className="py-3">
                                <Card.Body>
                                    <Card.Title>Mohideen Kader</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Head of HR</Card.Subtitle>
                                    <Card.Text className="text-danger">Lulu International Exchange LLC</Card.Text>
                                    <Card.Text>
                                        Officekit HR is an easy to use, fully customizable HR software which made our tedious tasks of daily HR process so easy.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '20rem' }} className="py-3">
                                <Card.Body>
                                    <Card.Title>Anees</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Head of HR</Card.Subtitle>
                                    <Card.Text className="text-danger">Thai Group</Card.Text>
                                    <Card.Text>
                                        Officekit lets you shine, it lets you put your thoughts together in a very concise format and it really helps you present your best face.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-light">
                <Container>
                    <div className="py-5 text-uppercase text-center">
                        <h4 className="p-4">The perfect HR Software for  small and large scale Business.</h4>
                    </div>
                    <div>
                        <p><strong>We promise. We provide. We guarantee.</strong> Our HR management software processes will provide you with noticeable changes helping your organization to acquire benefit-driven success taking your business to the next level. The high-performance of the HR management software will help your company reap huge benefits in the long run. We will customize office management software solutions that fit your business needs.</p>
                    </div>
                    <Row>
                        <Col md={4}>
                            <div className="p-3">
                                <p><strong><DoneIcon className="text-danger font-weight-bold" /> Employee Management</strong></p>
                                <p><strong><DoneIcon className="text-danger font-weight-bold" /> Leave Management</strong></p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="p-3">
                                <p><strong><DoneIcon className="text-danger font-weight-bold" /> Talent Management System</strong></p>
                                <p><strong><DoneIcon className="text-danger font-weight-bold" /> Attendance Management</strong></p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="p-3">
                                <p><strong><DoneIcon className="text-danger font-weight-bold" /> Payroll Management</strong></p>
                                <p><strong><DoneIcon className="text-danger font-weight-bold" /> Loan and Advance Management</strong></p>
                            </div>
                        </Col>
                    </Row>
                    <p className="pb-5">Your People, Our Passion, we stand by our motto. We are a human resource management software which is growing rapidly in the global scene. Our goal is to provide a complete hire to retire solution and make your human resource department the most seamless & easiest to function. More than an HRMS software we position ourselves as a talent onboarding & management product trying to figure out and take care of your employees better thus helping them grow.</p>
                </Container>
            </div>
            <div>
                <Container>
                    <div className="py-5">
                        <h4 className="py-4">Employees are the biggest strength of any company and we value your employees the most. We help you choose the best employees who can help you reach higher levels. We also help you understand and help them function better in the organization.</h4>
                    </div>
                    <Row>
                        <Col md={6}>
                            <p className="pb-3">Our modules include applicant tracking system, HRIS, leave & attendance management, payroll management, performance appraisal system, hr analytics, exit management etc. Apart from all these due to the Covid pandemic we have newer sensible modules like inbuilt video conferencing & geo-location tracking to help your managers monitor & improve effectiveness. 80% of our clients are through referrals, which helps us keep our marketing costs in control and thus makes our product priced right.</p>
                            <p className="pb-3">We provide the best human resource software product and the best value for money product in the world right now. Apart from all these modules we have a strong global payroll processing module which helps you do everything in-house. Our travel management module & exit management are add on modules that can improve the efficiency of the entire company.</p>
                        </Col>
                        <Col md={6}>
                            <p className="pb-3">A good human resource management software is not good with just the features but also in changing with time, our mobile application is superior to all our competitors and let's your organization run through mobile interactions. All major features including shift management, workflows etc can be controlled through the mobile application which is available on Google Play store & Apple Store.</p>
                            <p className="pb-3">The strength of a strong core team & an advisory board of excellent HRs across the globe is what truly sets us apart from the rest. We are constantly adapting and evolving so is the product, and we will continue to deliver the best product at the right price with the best support to make the human resource department the best.</p>
                        </Col>
                    </Row>
                    <div className="pt-5 text-uppercase text-center">
                        <h4 className="py-4">Presence in more than 20 countries</h4>
                    </div>
                    <Row className="justify-content-center">
                        <Col md={12} className="text-center">
                            <img src={locations} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Descriptions
