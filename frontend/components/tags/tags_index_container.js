import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { fetchAllTags } from '../../actions/tag_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    tags: state.tags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllTags: () => dispatch(fetchAllTags())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex));
