import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./navigation/navigation";
import PortfolioContainer from "./portfolio-container";

export default class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className='app'>
        <h1>BullDog</h1>
        <div className = "container">
          <Router>
            <Navigation />
          </Router>
        </div>
        
      </div>
    );
  }
}
