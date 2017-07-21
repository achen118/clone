import React from 'react';
import NotesHeader from './notes_header';
import SidebarContainer from '../sidebar/sidebar_container';
import NotesIndexContainer from '../notes/notes_index_container';
import NoteDetailContainer from '../notes/note_detail_container';
// import { Motion, spring, presets } from 'react-motion';
// import { Div, Button } from 'glamorous';

class Notes extends React.Component {

  componentWillReceiveProps(nextProps) {
    const nextId = nextProps.match.params.noteId;
    if (this.props.match.params.noteId !== nextId) {
      this.props.fetchSingleNote(nextId);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      panelOpen: true
    };
  }

  render() {
    const { notes, note } = this.props;
    let noteDetail;
    if (note) {
      noteDetail = <NoteDetailContainer note={ note } />;
    } else {
      noteDetail = <NoteDetailContainer note={ notes.byId[notes.allIds[0]] } />;
    }
    const { panelOpen } = this.state;
    return (
      <div className="notes-container">
        <SidebarContainer />
        <section className="notes-header-and-index">
          <NotesHeader noteCount={ notes.allIds.length } />
          <NotesIndexContainer />
        </section>
        { noteDetail }
      </div>
    );
  }

}

export default Notes;
