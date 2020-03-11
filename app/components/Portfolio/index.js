import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import portfolioData from 'database/data';
import {
  makeSelectPortfolio,
  makeSelectPortfolioCurrent,
  makeSelectPortfolioNext,
  makeSelectMediaSetting,
  makeSelectNavSetting
} from 'containers/App/selectors';
import {
  portfolioLoaded,
  updatePortfolioCurrent,
  updatePortfolioNext,
  updateMediaSetting,
  updateNavSetting
} from '../../containers/App/actions';
import Portfolio from './Portfolio';

const mapDispatchToProps = (dispatch) => ({
  onInit: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(portfolioLoaded(portfolioData));
    dispatch(updatePortfolioCurrent(portfolioData[0]));
  },
  updatePortfolioCurrent: (evt) => {
    dispatch(updatePortfolioCurrent(portfolioData[evt]));
  },
  updatePortfolioNext: (evt) => {
    dispatch(updatePortfolioNext(evt));
  },
  updateMediaSetting: (evt) => {
    dispatch(updateMediaSetting(evt));
  },
  updateNavSetting: (evt) => {
    dispatch(updateNavSetting(evt));
  }
});

const mapStateToProps = createStructuredSelector({
  portfolio: makeSelectPortfolio(),
  portfolioCurrent: makeSelectPortfolioCurrent(),
  portfolioNext: makeSelectPortfolioNext(),
  mediaSetting: makeSelectMediaSetting(),
  navSetting: makeSelectNavSetting(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Portfolio);
export { mapDispatchToProps };
