import { connect } from 'react-redux';
import TagsIndexItem from './tags_index_item';
import { withRouter } from 'react-router-dom';
import { deleteTag, fetchAllTags } from '../../actions/tag_actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTag: tag => dispatch(deleteTag(tag)),
    fetchAllTags: () => dispatch(fetchAllTags())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndexItem));
