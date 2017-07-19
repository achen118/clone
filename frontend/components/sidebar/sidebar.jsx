import React from 'react';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    // this.select = this.select.bind(this);
  }
  //
  // select(selector) {
  //   return (event) => {
  //     document.querySelector(selector)
  //       .classList
  //       .add(`${selector}-selected`);
  //     document.querySelector(selector)
  //       .classList
  //       .remove(selector);
  //   };
  // }

  render() {
    const currentUser = this.props.currentUser;
    const userInfo =
      <figure className="user-pic">
        <img src={ currentUser.image_url } alt="User Profile Picture" />
      </figure>;
    return (
      <div className="sidebar-container">
        <figure className="logo">
          <img className="logo-img" src="https://res.cloudinary.com/malice/image/upload/v1500404473/clevernotelogo_sss5gi.png" alt="CleverNote Logo" />
        </figure>
        <figure className="new-note">
        </figure>
        <figure className="search">
        </figure>
        <figure className="notes">
        </figure>
        <figure className="notebooks">
        </figure>
        <figure className="tags">
        </figure>
        { userInfo }
      </div>
    );
  }

}

export default Sidebar;
