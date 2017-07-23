import { connect } from 'react-redux';
import Note from './note';
import { updateNote } from '../../actions/note_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    notebooks: state.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNote: note => dispatch(updateNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
