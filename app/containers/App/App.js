import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route // for later
} from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import Portfolio from 'components/Portfolio';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Router>
        <section className="full-bleed-wrapper">
          <div className="app-wrapper">
            <Switch>
              <Route exact path="/" render={(matchProps) => <HomePage {...this.props} {...matchProps} />} />
              <Route path="/work" render={(matchProps) => <Portfolio {...this.props} {...matchProps} />} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </div>
        </section>
      </Router>
    );
  }
}

App.propTypes = {
  onInit: PropTypes.func,
  portfolio: PropTypes.array,
};

export default App;
