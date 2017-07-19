import { connect } from 'react-redux';
import NotesIndexItem from './notes_index_item';

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
)(NotesIndexItem);
