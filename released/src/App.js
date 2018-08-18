import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Home from './pages/home';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	      <Router>
            <Route exact path="/" component={Home} />
          </Router>
      </div>
    );
  }
}

export default App;
