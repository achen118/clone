import { connect } from 'react-redux';
import NewNote from './new_note';
import { addNote } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    notebooks: state.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNote: note => dispatch(addNote(note))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote));
