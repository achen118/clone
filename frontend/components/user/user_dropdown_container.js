import { connect } from 'react-redux';
import UserDropDown from'./user_dropdown';

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps
)(UserDropDown);
