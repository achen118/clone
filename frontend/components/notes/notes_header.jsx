import React from 'react';

const NotesHeader = props => {
  return (
    <section className="notes-header-container">
      <h1 className="notes-header">NOTES</h1>
      <ul className="notes-header-info">
        <li className="note-count">{ props.notes.allIds.length } notes</li>
        <li className="note-options">Options</li>
      </ul>
    </section>
  );
};

export default NotesHeader;
