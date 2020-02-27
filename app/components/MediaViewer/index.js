import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectMediaSetting
} from 'containers/App/selectors';
import { updateMediaSetting } from '../../containers/App/actions';
import MediaViewer from './MediaViewer';

const mapDispatchToProps = (dispatch) => ({
  updateMediaSetting: (evt) => {
    dispatch(updateMediaSetting(evt));
  }
});

const mapStateToProps = createStructuredSelector({
  mediaSetting: makeSelectMediaSetting()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(MediaViewer);
export { mapDispatchToProps };
