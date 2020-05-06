import React, { Component } from 'react';
import MediaViewer from 'components/MediaViewer';
import '../FeaturePage/style.scss';

import PropTypes from 'prop-types';

class HoverPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      portfolio, mediaSetting, updateMediaSetting, portfolioNext
    } = this.props;
    const current = portfolioNext;

    if (portfolio.length < 3) {
      return (
        <section className="page-loader portfolio-spread">
          <div className="loader"></div>
        </section>
      );
    }
    return (
      <section className={current.theme ? `hover-page portfolio-spread ${current.theme}` : 'hover-page  portfolio-spread'}>
        <div className="portfolio-nav last">
          <a>L a s t</a>
        </div>
        <div className="left">
          <MediaViewer media={current.media} mediaSetting={mediaSetting} updateMediaSetting={updateMediaSetting} />
        </div>
        <div className="right">
          <div className="text-container">
            <h1>{current.projectTitle}</h1>
            <a className="link" rel="noopener noreferrer" target="_blank" href={current.link}>{current.linkTitle ? current.linkTitle : current.link }</a>
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
          <a>N e x t</a>
        </div>
      </section>
    );
  }
}

HoverPage.propTypes = {
  portfolioNext: PropTypes.object,
  portfolio: PropTypes.array,
  mediaSetting: PropTypes.bool,
  updateMediaSetting: PropTypes.func,
};

export default HoverPage;
