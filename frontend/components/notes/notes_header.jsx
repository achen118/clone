import React from 'react';

const NotesHeader = props => {
  return (
    <section>
      <h1>NOTES</h1>
      <ul>
        <li>{ props.noteCount } notes</li>
        <li>Options</li>
      </ul>
    </section>
  );
};

export default NotesHeader;
