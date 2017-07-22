import React from 'react';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      prevClicked: "new-note"
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    const { currentUser } = this.props;
    const userInfo =
      <figure className="user-pic">
        <img src={ currentUser.image_url } alt="User Profile Picture" />
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
