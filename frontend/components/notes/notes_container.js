import { connect } from 'react-redux';
import Notes from './notes';

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
)(Notes);
