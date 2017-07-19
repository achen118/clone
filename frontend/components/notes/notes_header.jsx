import React from 'react';

const NotesHeader = props => {
  return (
    <section className="notes-header-container">
      <h1 className="notes-header">NOTES</h1>
      <ul>
        <li>{ props.noteCount } notes</li>
        <li>Options</li>
      </ul>
    </section>
  );
};

export default NotesHeader;
