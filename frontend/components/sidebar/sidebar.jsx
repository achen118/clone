import React from 'react';
import UserDropDownContainer from '../user/user_dropdown_container';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      prevClicked: "new-note"
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
      if (this.props.history.location.pathname === `/${key}`) {
        this.props.history.push('/notes');
      } else {
        this.props.history.push(`/${key}`);
      }
    };
  }

  showUserDropdown(event) {
     const dropdown = document.querySelector('.user-dropdown');
     if (event.target === dropdown) {
       event.preventDefault();
     } else {
       dropdown.classList.toggle('hidden');
     }
  }

  render() {
    const { currentUser } = this.props;
    const userInfo =
      <figure onClick={ this.showUserDropdown } className="user-pic">
        <img
          src={ currentUser.image_url }
          alt="User Profile Picture"
          className="user-img" />
        <UserDropDownContainer />
      </figure>;
    return (
      <nav className="sidebar-container">
        <figure className="logo">
          <Link to="/notes">
            <img
              className="logo-img"
              src="https://www.evernote.com/redesign/global/img/elephant.png"
              alt="CleverNote Logo" />
          </Link>
        </figure>
        <figure
          onClick={ this.handleClick('new-note') }
          className="new-note-selected new-note-hover"
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
        <section className="user-box">
          { userInfo }
        </section>
      </nav>
    );
  }

}

export default Sidebar;

// <figure
//   onClick={ this.handleClick('search') }
//   className="search search-hover"
//   >
// </figure>
