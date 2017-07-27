import { connect } from 'react-redux';
import NotebooksIndexItem from './notebooks_index_item';
import { withRouter } from 'react-router-dom';
import { deleteNotebook, fetchAllNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNotebook: notebook => dispatch(deleteNotebook(notebook)),
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndexItem));
