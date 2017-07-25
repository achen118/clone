import { connect } from 'react-redux';
import NewNotebook from './new_notebook';
import { withRouter } from 'react-router-dom';
import { addNotebook } from '../../actions/notebook_actions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addNotebook: notebook => dispatch(addNotebook(notebook))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNotebook));
