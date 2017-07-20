import { connect } from 'react-redux';
import NotesIndexItem from './notes_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndexItem));
