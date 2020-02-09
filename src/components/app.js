import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationComponent from "./navigation/navigation";

import About from "./pages/about";
import Contact from "./pages/contact";
import Reel from "./pages/reel";
import Gallery from "./pages/gallery";

export default class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className='app'>

        <div className="header">BullDog</div>
        <div className = "container">
          <Router>
            <div>
              <NavigationComponent />
                <Route path="/contact" component={Contact} />
                <Route path="/reel" component={Reel} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/about" component={About} />                
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
