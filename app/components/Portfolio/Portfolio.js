import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route // for later
} from 'react-router-dom';
import Header from 'components/Header';
import FeaturePage from '../../containers/FeaturePage/FeaturePage';
import './style.scss';

class Portfolio extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { onInit } = this.props;
    onInit();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="portfolio-page">
        <Header {...this.props} />
        <Route path={`${match.path}/:portfolioId`} render={(matchProps) => <FeaturePage {...this.props} {...matchProps} />} />
      </div>
    );
  }
}

Portfolio.propTypes = {
  match: PropTypes.object,
  onInit: PropTypes.func
};

export default Portfolio;
