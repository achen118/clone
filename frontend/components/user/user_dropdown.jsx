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
        <li className="user-email">
          { currentUser.email.toUpperCase() }
        </li>
        <li
          onClick={ this.handleLogout }
          className="user-logout">
          <figure className="user-logout-icon">
          </figure>
          <span>Log out</span>
        </li>
      </ul>
    );
  }

}

export default UserDropDown;
