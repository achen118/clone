import React from 'react';
import ReactQuill from 'react-quill';

class NewNote extends React.Component {

  componentDidMount() {
    this.attachQuillRefs();
    document.querySelector('.cancel').classList.remove('hidden');
    document.querySelector('.add-note').classList.remove('hidden');
  }

  componentDidUpdate() {
    this.attachQuillRefs();
  }

  // componentWillUnmount() {
  //   clearTimeout(this.autosaveTimer);
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (this.props !== nextProps) {
  //     clearTimeout(this.autosaveTimer);
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      plain_text_body: "",
      notebook_id: this.props.notebooks.allIds[0]
    };
    this.quillRef = null;      // Quill instance
    this.reactQuillRef = null; // ReactQuill component
    this.updateQuill = this.updateQuill.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    // this.autosave = this.autosave.bind(this);
    // this.startAutosaveTimer = this.startAutosaveTimer.bind(this);
    // this.stopAutosaveTimer = this.stopAutosaveTimer.bind(this);
    // this.autosaveTimer = null;
    // this.autosaveInterval = 500;
  }

  updateQuill(value) {
    this.setState({
      body: value,
      plain_text_body: this.reactQuillRef.getEditor().getText()
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

  handleCancel() {
    document.querySelector('.cancel').classList.add('hidden');
    this.props.history.push('/notes');
  }

  handleAddNote() {
    this.props.addNote(this.state).then(() => this.props.history.push('/notes'));
    document.querySelector('.add-note').classList.add('hidden');
  }

  // startAutosaveTimer(event) {
  //   clearTimeout(this.autosaveTimer);
  //   if (event.currentTarget.value) {
  //     this.autosaveTimer = setTimeout(this.autosave, this.autosaveInterval);
  //   }
  // }
  //
  // stopAutosaveTimer(event) {
  //   clearTimeout(this.autosaveTimer);
  // }

  // autosave() {
  //   this.setState({
  //     plain_text_body: this.reactQuillRef.getEditor().getText()
  //   }, () => {
  //     if (this.state.id) {
  //       this.props.updateNote(this.state);
  //     } else {
  //       this.props.addNote(this.state);
  //     }
  //   });
  // }

  render() {
    return(
      <div className="new-note-container">
        <input
          type="text"
          placeholder="Title your note"
          value={ this.state.title }
          onChange={ this.updateTitle } />
        <ReactQuill
          ref={(el) => { this.reactQuillRef = el; }}
          placeholder="Just start typing..."
          value={this.state.body}
          onChange={this.updateQuill}
          theme={'snow'}/>
        <button className="cancel hidden" onClick ={ this.handleCancel }>Cancel</button>
        <button className="add-note hidden" onClick ={ this.handleAddNote }>Save Note</button>
      </div>
    );
  }
}

export default NewNote;
