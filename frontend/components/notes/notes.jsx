import React from 'react';
import NotesHeader from './notes_header';
import SidebarContainer from '../sidebar/sidebar_container';
import NotesIndexContainer from '../notes/notes_index_container';

class Notes extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const notes = this.props.notes;
    return (
      <div className="notes-container">
        <SidebarContainer />
        <section>
          <NotesHeader noteCount={ notes.allIds.length } />
          <NotesIndexContainer />
        </section>
      </div>
    );
  }

}

export default Notes;
