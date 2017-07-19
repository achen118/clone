import React from 'react';
import NotesHeader from './notes_header';
import SidebarContainer from '../sidebar/sidebar_container';
import NotesIndexContainer from '../notes/notes_index_container';
import NoteDetailContainer from '../notes/note_detail_container';

class Notes extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const notes = this.props.notes;
    return (
      <div className="notes-container">
        <SidebarContainer />
        <section className="notes-header-and-index">
          <NotesHeader noteCount={ notes.allIds.length } />
          <NotesIndexContainer />
        </section>
        <NoteDetailContainer noteId={ this.props.match.params.noteId } />
      </div>
    );
  }

}

export default Notes;
