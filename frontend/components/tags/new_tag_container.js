import { connect } from 'react-redux';
import NewTag from './new_tag';
import { withRouter } from 'react-router-dom';
import { addTag } from '../../actions/tag_actions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addTag: tag => dispatch(addTag(tag))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTag));
