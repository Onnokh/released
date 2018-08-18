import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';

import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import createStore from './redux/store';
const store = createStore();


class App extends Component {
  render() {
    return (
      <div className="App">
	      <Provider store={store}>
              <Router>
                <Route exact path="/" component={Home} />
              </Router>
          </Provider>
      </div>
    );
  }
}

export default App;
