import { connect } from 'react-redux';
import NotebookHeader from './notebook_header';

const mapStateToProps = state => {
  return {
    notes: state.notes,
    notebooks: state.notebooks
  };
};

export default connect(
  mapStateToProps
)(NotebookHeader);
