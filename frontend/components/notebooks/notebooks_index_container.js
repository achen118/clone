import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { fetchAllNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = state => {
  return {
    notebooks: state.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);
