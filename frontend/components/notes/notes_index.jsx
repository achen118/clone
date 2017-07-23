import React from 'react';
import NotesIndexItemContainer from './notes_index_item_container';

class NotesIndex extends React.Component {

  componentWillMount() {
    if (this.props.notebookId) {
      this.props.fetchNotesFromNotebook(this.props.notebookId);
    } else {
      this.props.fetchAllNotes();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== '/notes' && nextProps.location.pathname === '/notes') {
      this.props.fetchAllNotes();
    }
    if (nextProps.location.pathname.indexOf('/notebooks') === 0) {
      this.props.fetchNotesFromNotebook(nextProps.notebookId);
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { notes } = this.props;
    let notesIndexItems;
    if (notes.allIds.length > 0) {
      notesIndexItems = notes.allIds.map((note, idx) =>
        <NotesIndexItemContainer
          note={ notes.byId[note] }
          key={ idx }
        />
      );
    }
    return (
      <section className="notes-index-container">
        { notesIndexItems }
      </section>
    );
  }

}

export default NotesIndex;
