/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import Faerie from 'components/Faerie';
import HoverPage from '../HoverPage';

import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { onInit } = this.props;
    onInit();
  }

  render() {
    const { navSetting } = this.props;
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className={navSetting ? 'home-page hover-state' : 'home-page'}>
          <div className="archway">
          </div>
          <div className="archway">
          </div>

          <div className="archway">
            <Faerie />
          </div>
          <div className="archway"></div>
        </div>
        <Header {...this.props} />
        { navSetting ? <HoverPage {...this.props} /> : null }
      </article>
    );
  }
}

HomePage.propTypes = {
  onInit: PropTypes.func,
  navSetting: PropTypes.bool
};
