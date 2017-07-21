import React from 'react';
import { Redirect } from 'react-router-dom';
import timeSince from '../../util/date_util';

class NotesIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(noteId) {
    return (event) => this.props.history.push(`/notes/${noteId}`);
  }

  render() {
    const { note } = this.props;
    const lastUpdate = timeSince(new Date(note.updated_at));
    return (
      <div>
        <article className="notes-index-item" onClick={ this.handleClick(note.id) }>
          <h3 className="notes-index-title">{ note.title }</h3>
          <h4 className="notes-index-updated">{ lastUpdate }</h4>
          <p className="notes-index-body">{ note.body }</p>
        </article>
        <div className="bottom-border"></div>
      </div>
    );
  }

}

export default NotesIndexItem;



// <article className="notes-index-item" onClick={ this.handleClick(note.id) }>
//   <h3 className="note-title">{ note.title }</h3>
//   <h4 className="note-last-updated">Updated at</h4>
//   <p className="note-body">{ note.body }</p>
// </article>
