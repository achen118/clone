import React from 'react';
import ReactQuill from 'react-quill';

class Note extends React.Component {

  componentDidMount() {
    this.attachQuillRefs();
  }

  componentDidUpdate() {
    this.attachQuillRefs();
  }

  componentWillUnmount() {
    clearTimeout(this.autosaveTimer);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      clearTimeout(this.autosaveTimer);
    }
    this.setState({
      id: nextProps.note.id,
      title: nextProps.note.title,
      body: nextProps.note.body,
      plain_text_body: nextProps.note.plain_text_body
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.id,
      title: this.props.note.title,
      body: this.props.note.body,
      plain_text_body: this.props.note.plain_text_body,
      notebook_id: this.props.note.notebook_id,
      author_id: this.props.currentUser.id
    };
    this.quillRef = null;      // Quill instance
    this.reactQuillRef = null; // ReactQuill component
    this.updateQuill = this.updateQuill.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.autosave = this.autosave.bind(this);
    this.startAutosaveTimer = this.startAutosaveTimer.bind(this);
    this.stopAutosaveTimer = this.stopAutosaveTimer.bind(this);
    this.autosaveTimer = null;
    this.autosaveInterval = 500;
  }

  updateQuill(value) {
    this.setState({
      body: value
    });
  }

  updateTitle(event) {
    this.setState({
      title: event.currentTarget.value
    });
  }

  attachQuillRefs() {
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    this.quillRef = this.reactQuillRef.getEditor();
  }

  startAutosaveTimer(event) {
    clearTimeout(this.autosaveTimer);
    if (event.currentTarget.value) {
      this.autosaveTimer = setTimeout(this.autosave, this.autosaveInterval);
    }
  }

  stopAutosaveTimer(event) {
    clearTimeout(this.autosaveTimer);
  }

  autosave() {
    this.setState({
      plain_text_body: this.reactQuillRef.getEditor().getText()
    }, () => this.props.updateNote(this.state));
  }

  render() {
    console.log(this.state);
    return(
      <div className="note-container">
        <input
          type="text"
          value={ this.state.title }
          onChange={ this.updateTitle }
          onKeyUp={ this.startAutosaveTimer }
          onKeyDown={ this.stopAutosaveTimer } />
        <ReactQuill
          ref={(el) => { this.reactQuillRef = el }}
          value={this.state.body}
          onChange={this.updateQuill}
          onKeyUp={ this.startAutosaveTimer }
          onKeyDown={ this.stopAutosaveTimer }
          theme={'snow'}/>
      </div>
    );
  }
}

export default Note;
