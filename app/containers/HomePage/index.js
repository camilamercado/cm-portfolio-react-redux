import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import portfolioData from 'database/data';

import {
  makeSelectPortfolio,
  makeSelectNavSetting,
  makeSelectPortfolioNext,
  makeSelectPortfolioCurrent
} from 'containers/App/selectors';
import { portfolioLoaded, updateNavSetting, updatePortfolioNext } from '../App/actions';
import reducer from './reducer';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onInit: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(portfolioLoaded(portfolioData));
  },
  updateNavSetting: (evt) => {
    dispatch(updateNavSetting(evt));
  },
  updatePortfolioNext: (evt) => {
    dispatch(updatePortfolioNext(evt));
  }
});

const mapStateToProps = createStructuredSelector({
  portfolio: makeSelectPortfolio(),
  navSetting: makeSelectNavSetting(),
  portfolioCurrent: makeSelectPortfolioCurrent(),
  portfolioNext: makeSelectPortfolioNext(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withReducer, withConnect)(HomePage);
export { mapDispatchToProps };
