import React from 'react';

class NoteDetail extends React.Component {

  componentWillMount() {
    this.props.fetchSingleNote(this.props.noteId);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="note-detail-container">
        <h1>asdf</h1>
      </section>
    );
  }

}

export default NoteDetail;
