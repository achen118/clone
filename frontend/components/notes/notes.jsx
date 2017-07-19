import React from 'react';
import NotesHeader from './notes_header';

class Notes extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const notes = this.props.notes;
    return (
      <NotesHeader noteCount={ notes.allIds.length } />
    );
  }

}

export default Notes;
