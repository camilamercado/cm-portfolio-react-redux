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
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <div className="archway">
            <div className="sticker"></div>
          </div>
          <div className="archway">
          </div>

          <div className="archway">
            <Faerie />
          </div>
          <div className="archway"></div>
        </div>
        <Header {...this.props} />
      </article>
    );
  }
}

HomePage.propTypes = {
  onInit: PropTypes.func,
};
