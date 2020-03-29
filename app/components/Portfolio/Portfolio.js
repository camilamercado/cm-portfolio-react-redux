import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route // for later
} from 'react-router-dom';
import classNames from 'classnames';
import Header from 'components/Header';
import FeaturePage from '../../containers/FeaturePage/FeaturePage';
import HoverPage from '../../containers/HoverPage/HoverPage';
import './style.scss';

class Portfolio extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { onInit } = this.props;
    onInit();
  }
  // {navSetting ? 'home-page hover-state' : 'home-page'}

  render() {
    const { match, navSetting, portfolioCurrent } = this.props;
    const classValue = classNames({
      'portfolio-page': true,
      'hover-state': navSetting
    });
    return (
      <div className={portfolioCurrent.theme ? `${classValue} ${portfolioCurrent.theme}` : classValue}>
        <Header {...this.props} />
        <Route path={`${match.path}/:portfolioId`} render={(matchProps) => <FeaturePage {...this.props} {...matchProps} />} />
        { navSetting ? <HoverPage {...this.props} /> : null }
      </div>
    );
  }
}

Portfolio.propTypes = {
  match: PropTypes.object,
  portfolioCurrent: PropTypes.object,
  onInit: PropTypes.func,
  navSetting: PropTypes.bool
};

export default Portfolio;
