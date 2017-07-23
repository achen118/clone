import { connect } from 'react-redux';
import NotesHeader from './notes_header';

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps
)(NotesHeader);
