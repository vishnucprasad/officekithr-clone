import React from "react";
import "./Chart.css";
import { Container, Nav } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import Hiring from "./Charts/Hiring";

function Chart() {
  return (
    <div className="charts">
      <Container>
        <Nav
          fill
          variant="tabs"
          className="text-uppercase small"
          defaultActiveKey="home"
        >
          <Nav.Item>
            <Nav.Link className="border-0 text-dark" eventKey="home">
              <Link
                className="text-decoration-none text-dark"
                to="/home/Hiring&Onboarding"
              >
                Hiring & Onboarding
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="border-0 text-dark" eventKey="link-1">
              <Link className="text-decoration-none text-dark" to="/home/HRIS">
                HRIS
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="border-0 text-dark" eventKey="link-2">
              <Link className="text-decoration-none text-dark" to="/home/Payroll">
                Payroll
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="border-0 text-dark" eventKey="link-3">
              <Link
                className="text-decoration-none text-dark"
                to="/home/Time&AbsenceTracking"
              >
                Time & Absence Tracking
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="border-0 text-dark" eventKey="link-4">
              <Link
                className="text-decoration-none text-dark"
                to="/home/Performance&Talent"
              >
                Performance & Talent
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="border-0 text-dark" eventKey="link-5">
              <Link
                className="text-decoration-none text-dark"
                to="/home/MobileApp&More"
              >
                Mobile App & More
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Route path='/home/Hiring&Onboarding' component={Hiring} />
        <Route path='/home/HRIS' component={Hiring} />
        <Route path='/home/Payroll' component={Hiring} />
        <Route path='/home/Time&AbsenceTracking' component={Hiring} />
        <Route path='/home/Performance&Talent' component={Hiring} />
        <Route path='/home/MobileApp&More' component={Hiring} />
      </Container>
    </div>
  );
}

export default Chart;
