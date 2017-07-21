import React from 'react';
import { Redirect } from 'react-router-dom';


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

    return (
      <div>
        <article className="notes-index-item" onClick={ this.handleClick(note.id) }>
          <h3 className="notes-index-title">{ note.title }</h3>
          <h4 className="notes-index-updated">Yesterday</h4>
          <p className="notes-index-body">{ note.body }</p>
        </article>
        <div className="bottom-border"></div>
      </div>
    );
  }

}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    text = text.substr(0,maxLength);
    if (text[100] === " ")
      return text;
    else {
      return text.substr(0, text.lastIndexOf(" "));
    }
  }
}

export default NotesIndexItem;



// <article className="notes-index-item" onClick={ this.handleClick(note.id) }>
//   <h3 className="note-title">{ note.title }</h3>
//   <h4 className="note-last-updated">Updated at</h4>
//   <p className="note-body">{ note.body }</p>
// </article>
