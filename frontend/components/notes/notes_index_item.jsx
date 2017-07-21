import React from 'react';
import { Redirect } from 'react-router-dom';
import timeSince from '../../util/date_util';

class NotesIndexItem extends React.Component {

  componentDidMount() {
    this.intervalId = setInterval(this.updateDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  updateDate() {
    this.setState({ date: new Date() });
  }

  handleClick(noteId) {
    return (event) => {
      const lastSelected = document.querySelector(".selected-index-item");
      console.log(lastSelected);
      if (lastSelected) {
        lastSelected.classList.remove("selected-index-item");
      }
      event.currentTarget.classList.add("selected-index-item");
      this.props.history.push(`/notes/${noteId}`);
    };
  }

  render() {
    const { note, match } = this.props;
    const lastUpdate = timeSince(this.state.date, new Date(note.updated_at));
    return (
      <div>
        <article
          className="notes-index-item"
          onClick={ this.handleClick(note.id) }>
          <figure className="index-item-reminder">
          </figure>
          <figure className="index-item-delete">
          </figure>
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
