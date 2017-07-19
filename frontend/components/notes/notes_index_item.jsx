import React from 'react';

class NotesIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { notes, note } = this.props;
    return (
      <section className="notes-index-item-container">
        <article className="notes-index-item">
          <h3>{ note.title }</h3>
        </article>
      </section>
    );
  }

}

export default NotesIndexItem;
