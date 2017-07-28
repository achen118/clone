import { connect } from 'react-redux';
import NotebookHeader from './notebook_header';
import { withRouter } from 'react-router-dom';
import { updateNotebook } from '../../actions/notebook_actions';

const mapStateToProps = state => {
  return {
    notes: state.notes,
    notebooks: state.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNotebook: notebook => dispatch(updateNotebook(notebook))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookHeader));
