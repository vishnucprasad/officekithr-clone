import React from "react";
import "./Chart.css";
import { Container, Nav } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import Hiring from "./Charts/Hiring";
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import FormatAlignLeftOutlinedIcon from '@material-ui/icons/FormatAlignLeftOutlined';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import TimerIcon from '@material-ui/icons/Timer';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Hris from "./Charts/Hris";
import Payroll from "./Charts/Payroll";
import Time from "./Charts/Time";
import Performance from "./Charts/Performance";
import Mobile from "./Charts/Mobile";

function Chart() {
  return (
    <div className="charts">
      <div className="chartNav">
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
                  <WorkOutlineOutlinedIcon className="mb-1" /> Hiring & Onboarding
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="border-0 text-dark" eventKey="link-1">
                <Link
                  className="text-decoration-none text-dark"
                  to="/home/HRIS"
                >
                 <FormatAlignLeftOutlinedIcon className="mb-1 hris rounded"/> HRIS
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="border-0 text-dark" eventKey="link-2">
                <Link
                  className="text-decoration-none text-dark"
                  to="/home/Payroll"
                >
                  <WebAssetIcon className="mb-1" /> Payroll
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="border-0 text-dark" eventKey="link-3">
                <Link
                  className="text-decoration-none text-dark"
                  to="/home/Time&Absence-Tracking"
                >
                  < TimerIcon className="mb-1" /> Time & Absence Tracking
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="border-0 text-dark" eventKey="link-4">
                <Link
                  className="text-decoration-none text-dark"
                  to="/home/Performance&Talent"
                >
                  <TrendingUpIcon className="mb-1" /> Performance & Talent
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="border-0 text-dark" eventKey="link-5">
                <Link
                  className="text-decoration-none text-dark"
                  to="/home/MobileApp&More"
                >
                 <PhoneIphoneIcon className="mb-1" /> Mobile App & More
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </div>
      <Route path="/home/Hiring&Onboarding" component={Hiring} />
      <Route path="/home/HRIS" component={Hris} />
      <Route path="/home/Payroll" component={Payroll} />
      <Route path="/home/Time&Absence-Tracking" component={Time} />
      <Route path="/home/Performance&Talent" component={Performance} />
      <Route path="/home/MobileApp&More" component={Mobile} />
    </div>
  );
}

export default Chart;
