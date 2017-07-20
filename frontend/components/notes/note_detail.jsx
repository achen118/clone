import React from 'react';
import Note from './note';

class NoteDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { note } = this.props;
    let showNote;
    if (note) {
      showNote = <Note note={ note }/>;
    }
    return (
      <section className="note-detail-container">
        <header className="note-detail-header">
          <figure className="note-detail-reminder">
          </figure>
          <figure className="note-detail-info">
          </figure>
          <figure className="note-detail-delete">
          </figure>
          <figure className="note-detail-more">
          </figure>
          <figure className="expand">
          </figure>
        </header>
        { showNote }
      </section>
    );
  }

}

export default NoteDetail;
