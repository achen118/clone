import { connect } from 'react-redux';
import NotesIndex from './notes_index';

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
