import React from 'react';

class NotesIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { note } = this.props;
    console.log(note);
    return (
      <section className="notes-index-item-container">
        <article className="notes-index-item">
          <h3 className="note-title">{ note.title }</h3>
          <h4 className="note-last-updated">Updated at</h4>
          <p className="note-body">{ note.body }</p>
        </article>
      </section>
    );
  }

}

export default NotesIndexItem;
