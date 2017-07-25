import React from 'react';
import UserDropDownContainer from '../user/user_dropdown_container';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      prevClicked: "new-note",
      toggleUserDropDown: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showUserDropdown = this.showUserDropdown.bind(this);
  }

  handleLogout(event) {
    this.props.logout();
  }

  handleClick(key) {
    return event => {
      this.setState({
        prevClicked: key
      });
      const { prevClicked } = this.state;
      if (prevClicked) {
        const icon = document.querySelector(`.${prevClicked}-selected`);
        icon.classList.remove(`${prevClicked}-selected`);
        icon.classList.add(prevClicked);
      }
      const icon = document.querySelector(`.${key}`);
      icon.classList.remove(key);
      icon.classList.add(`${key}-selected`);
      this.props.history.push(`/${key}`);
    };
  }

  showUserDropdown(event) {
    document.querySelector('.user-dropdown').classList.toggle('hidden', this.state.toggleUserDropDown);
    this.setState({
      toggleUserDropDown: !this.state.toggleUserDropDown
    });
    // need to prevent toggle if clicking inside dropdown, preent default?
  }

  render() {
    const { currentUser } = this.props;
    const userInfo =
      <figure onClick={ this.showUserDropdown } className="user-pic">
        <img src={ currentUser.image_url } alt="User Profile Picture" />
        <UserDropDownContainer />
      </figure>;
    return (
      <nav className="sidebar-container">
        <figure className="logo">
          <img
            className="logo-img"
            src="https://res.cloudinary.com/malice/image/upload/v1500404473/clevernotelogo_sss5gi.png"
            alt="CleverNote Logo"
            />
        </figure>
        <figure
          onClick={ this.handleClick('new-note') }
          className="new-note-selected new-note-hover"
          >
        </figure>
        <figure
          onClick={ this.handleClick('search') }
          className="search search-hover"
          >
        </figure>
        <figure
          onClick={ this.handleClick('notes') }
          className="notes notes-hover"
          >
        </figure>
        <figure
          onClick={ this.handleClick('notebooks') }
          className="notebooks notebooks-hover"
          >
        </figure>
        <figure
          onClick={ this.handleClick('tags') }
          className="tags tags-hover"
          >
        </figure>
        <button onClick={ this.handleLogout }>Logout</button>
        <section className="user-box">
          { userInfo }
        </section>
      </nav>
    );
  }

}

export default Sidebar;

document.addEventListener('click', event => {
  const dropdown = document.querySelector('.user-dropdown');
  const isClickInside = dropdown.contains(event.currentTarget);
  if (!isClickInside) {
    document.querySelector('.user-dropdown').classList.add('hidden');
  }
});
