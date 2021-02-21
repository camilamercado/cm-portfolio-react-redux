import React, { Component } from 'react';
import MediaViewer from 'components/MediaViewer';

import {
  Link,
} from 'react-router-dom';
import './style.scss';
import PropTypes from 'prop-types';

class FeaturePage extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { portfolio, updatePortfolioCurrent, match, portfolioCurrent } = this.props;
    const currentIndex = portfolio.findIndex(({ id }) => id === match.params.portfolioId);
    updatePortfolioCurrent(currentIndex);
  }

  componentDidUpdate() {
    const { portfolio, updatePortfolioCurrent, match, portfolioCurrent } = this.props;
    const currentIndex = portfolio.findIndex(({ id }) => id === match.params.portfolioId);
    updatePortfolioCurrent(currentIndex, portfolioCurrent, match.params);
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
      <section id={current.id} className={current.theme ? `portfolio-spread ${settingLabel} ${current.theme}` : `portfolio-spread ${settingLabel}`}>
        <div className="portfolio-nav last">
          <Link to={`${lastEntry.id}`}> L a s t</Link>
        </div>
        <div className="left">
          <MediaViewer media={current.media} mediaSetting={mediaSetting} updateMediaSetting={updateMediaSetting} />
        </div>
        <div className="right">
          <div className="text-container">
            <h1>
              {current.projectTitle}
              <span id="project-date">{current.date}</span>
            </h1>
            <a className="link" rel="noopener noreferrer" target="_blank" href={current.link}>{current.linkTitle ? current.linkTitle : current.link }</a>
            <ul>
              {current.tags.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div class="text-body" dangerouslySetInnerHTML={{
                __html: current.text
              }}>
              
            </div>
          </div>
        </div>
        <div className="text-buffer"></div>
        <div className="portfolio-nav next">
          <Link to={`${nextEntry.id}`}>N e x t</Link>
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
