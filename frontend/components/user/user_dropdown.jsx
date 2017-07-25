import React from 'react';

const UserDropDown = props => {
  const { currentUser } = props;
  return (
    <ul className="user-dropdown hidden">
      <li>
        { currentUser.email.toUpperCase() }
      </li>
    </ul>
  );
};

export default UserDropDown;
