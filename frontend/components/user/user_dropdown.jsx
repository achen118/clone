import React from 'react';

class UserDropDown extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    this.props.logout();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <ul className="user-dropdown hidden">
        <li>
          <img src={ currentUser.image_url } alt="Profile Picture" />
        </li>
        <li>
          { currentUser.email.toUpperCase() }
        </li>
        <li>
          <button onClick={ this.handleLogout }>Logout</button>
        </li>
      </ul>
    );
  }

}

export default UserDropDown;
