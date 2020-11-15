import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Components/Navigationbar';
import Header from './Components/Header';
import Chart from './Components/Chart';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Descriptions from './Components/Descriptions';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Router>
        <Route exact path="/"
          render={() => {
            return (
              <Redirect to="/home/Hiring&Onboarding" />
            )
          }}
        />
        <Route path="/home">
          <Header />
          <Chart />
          <Descriptions />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
