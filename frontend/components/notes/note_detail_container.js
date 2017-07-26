import { connect } from 'react-redux';
import NoteDetail from './note_detail';
import { withRouter } from 'react-router-dom';
import { deleteNote } from '../../actions/note_actions';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: note => dispatch(deleteNote(note))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetail));
