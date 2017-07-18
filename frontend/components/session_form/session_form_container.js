import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signin, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.currentUser),
    errors: state.errors,
    formType: ownProps.location.pathname === '/signup' ? 'signup' : 'signin'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: ownProps.location.pathname === '/signin' ? user => dispatch(signin(user)) : user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
