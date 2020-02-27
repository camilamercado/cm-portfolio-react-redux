import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import portfolioData from 'database/data';

import {
  makeSelectPortfolio,
  makeSelectPortfolioCurrent,
  makeSelectMediaSetting
} from 'containers/App/selectors';
import { portfolioLoaded, updatePortfolioCurrent, updateMediaSetting } from '../../containers/App/actions';
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
  updateMediaSetting: (evt) => {
    dispatch(updateMediaSetting(evt));
  }
});

const mapStateToProps = createStructuredSelector({
  portfolio: makeSelectPortfolio(),
  portfolioCurrent: makeSelectPortfolioCurrent(),
  mediaSetting: makeSelectMediaSetting()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Portfolio);
export { mapDispatchToProps };
