import React, { Component } from 'react';
import MediaViewer from 'components/MediaViewer';

import {
  Link,
} from 'react-router-dom';
import './style.scss';
import PropTypes from 'prop-types';

class FeaturePage extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { portfolio, updatePortfolioCurrent, match } = this.props;
    const currentIndex = portfolio.findIndex(({ id }) => id === match.params.portfolioId);
    updatePortfolioCurrent(currentIndex);
  }

  componentDidUpdate() {
    const { portfolio, updatePortfolioCurrent, match } = this.props;
    const currentIndex = portfolio.findIndex(({ id }) => id === match.params.portfolioId);
    updatePortfolioCurrent(currentIndex);
  }

  render() {
    const {
      portfolio, portfolioCurrent, mediaSetting, updateMediaSetting
    } = this.props;
    const current = portfolioCurrent;
    const portfolioCount = portfolio.indexOf(portfolioCurrent);
    const nextEntry = portfolioCount === portfolio.length - 1 ? portfolio[0] : portfolio[portfolioCount + 1];
    const lastEntry = portfolioCount <= 0 ? portfolio[portfolio.length - 1] : portfolio[portfolioCount - 1];
    const settingLabel = mediaSetting ? 'Reduce' : 'Expand';

    if (portfolio.length < 3) {
      return (
        <section className="page-loader portfolio-spread">
          <div className="loader"></div>
        </section>
      );
    }
    return (
      <section className={current.theme ? `portfolio-spread ${settingLabel} ${current.theme}` : `portfolio-spread ${settingLabel}`}>
        <div className="portfolio-nav last">
          <Link to={`${lastEntry.id}`}>
            <h2>L a s t</h2>
            <span>{lastEntry.projectTitle}</span>
          </Link>
        </div>
        <div className="left">
          <MediaViewer media={current.media} mediaSetting={mediaSetting} updateMediaSetting={updateMediaSetting} />
        </div>
        <div className="right">
          <div className="text-container">
            <h1>{current.projectTitle}</h1>
            <a className="link" href={current.link}>{current.link}</a>
            <ul>
              {current.tags.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>
              {current.text}
            </p>
          </div>
        </div>
        <div className="text-buffer"></div>
        <div className="portfolio-nav next">
          <Link to={`${nextEntry.id}`}>
            <h2>N e x t</h2>
            <span>{nextEntry.projectTitle}</span>
          </Link>
        </div>
      </section>
    );
  }
}

FeaturePage.propTypes = {
  match: PropTypes.object,
  portfolioCurrent: PropTypes.object,
  portfolio: PropTypes.array,
  updatePortfolioCurrent: PropTypes.func,
  mediaSetting: PropTypes.bool,
  updateMediaSetting: PropTypes.func,
};

export default FeaturePage;
