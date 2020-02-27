import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import portfolioData from 'database/data';

import {
  makeSelectPortfolio,
  makeSelectMediaSetting,
} from 'containers/App/selectors';
import { portfolioLoaded, updatePortfolioCurrent } from '../App/actions';
import FeaturePage from './FeaturePage';

const mapDispatchToProps = (dispatch) => ({
  onInit: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(portfolioLoaded(portfolioData));
  },
  updatePortfolioCurrent: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(updatePortfolioCurrent(evt));
  }
});

const mapStateToProps = createStructuredSelector({
  portfolio: makeSelectPortfolio(),
  mediaSetting: makeSelectMediaSetting(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(FeaturePage);
export { mapDispatchToProps };
