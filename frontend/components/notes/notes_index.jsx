import React from 'react';
import NotesIndexItemContainer from './notes_index_item_container';

class NotesIndex extends React.Component {

  componentWillMount() {
    this.props.fetchAllNotes();
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }

  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
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
