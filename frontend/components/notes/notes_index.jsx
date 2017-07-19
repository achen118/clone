import React from 'react';
import NotesIndexItemContainer from './notes_index_item_container';

class NotesIndex extends React.Component {

  componentWillMount() {

  }

  constructor(props) {
    super(props);
  }

  render() {
    const { notes } = this.props;
    return (
      <section className="notes-index-container">
        { notes.allIds.map(note => <NotesIndexItemContainer note={ note }/>) }
      </section>
    );
  }

}

export default NotesIndex;
