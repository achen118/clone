import React from 'react';
import NoteContainer from './note_container';
import NewNoteContainer from './new_note_container';

class NoteDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteNote(this.props.note)
      .then(() => this.props.history.push('/notes'));
  }

  render() {
    const { note, location } = this.props;
    let showNote;
    if (location.pathname === '/new-note') {
      showNote =
        <section className="note-detail-container">
          <header className="note-detail-header">
            <figure
              className="note-detail-delete"
              onClick={ this.handleDelete }>
            </figure>
          </header>
          <NewNoteContainer />
        </section>;
    } else {
      if (note) {
        showNote =
        <section className="note-detail-container">
          <header className="note-detail-header">
            <figure
              className="note-detail-delete"
              onClick={ this.handleDelete }>
            </figure>
          </header>
          <NoteContainer note={ note } />
        </section>;
      }
    }
    return (
      <div>
        { showNote }
      </div>
    );
  }
}

export default NoteDetail;
