import React from 'react';

const TagsHeader = props => {
  return (
    <section className="tags-header-container">
      <h1 className="tag-header">TAG: { props.tagName.toUpperCase() }</h1>
      <ul className="notes-header-info">
        <li className="note-count">{ props.notes.allIds.length } notes</li>
        <li className="note-options">Options</li>
      </ul>
    </section>
  );
};

export default TagsHeader;
