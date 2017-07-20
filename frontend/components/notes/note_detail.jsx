import React from 'react';

class NoteDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { notes, noteId } = this.props;
    let note;
    if (noteId) {
      note = notes.byId[noteId];
    }
    return (
      <section className="note-detail-container">
        <header className="note-detail-header">
          <figure className=""></figure>
        </header>
      </section>
    );
  }

}

export default NoteDetail;
