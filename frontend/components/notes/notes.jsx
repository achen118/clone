import React from 'react';
import NotesHeader from './notes_header';
import SidebarContainer from '../sidebar/sidebar_container';

class Notes extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const notes = this.props.notes;
    return (
      <div className="notes-container">
        <SidebarContainer />
        <NotesHeader noteCount={ notes.allIds.length } />
      </div>
    );
  }

}

export default Notes;
