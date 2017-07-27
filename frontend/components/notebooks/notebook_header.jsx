import React from 'react';

const NotebookHeader = props => {
  let header;
  if (props.notebooks.allIds.length > 0) {
    header =
      <section className="notebook-header-container">
        <h1 className="notebook-header">{ props.notebooks.byId[props.notebookId].title }</h1>
        <ul className="notes-header-info">
          <li className="note-count">{ props.notes.allIds.length } notes</li>
        </ul>
      </section>;
  }
  return (
    <div>
      { header }
    </div>
  );
};

export default NotebookHeader;
