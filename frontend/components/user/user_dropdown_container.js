import { connect } from 'react-redux';
import UserDropDown from'./user_dropdown';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDropDown);
