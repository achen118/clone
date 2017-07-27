import React from 'react';
import ReactQuill from 'react-quill';

class NewNote extends React.Component {

  componentDidMount() {
    this.attachQuillRefs();
    this.quillRef.focus();
    document.querySelector('.cancel').classList.remove('hidden');
    document.querySelector('.add-note').classList.remove('hidden');
    if (this.state.title || this.state.body) {
      document.querySelector('.add-note').disabled = false;
    } else {
      document.querySelector('.add-note').disabled = true;
    }
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

  componentWillReceiveProps(nextProps) {
    this.attachQuillRefs();
    this.quillRef.focus();
  }

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
    this.modules = {
      toolbar: [
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, 'bold', 'italic', 'underline','strike', 'code-block'],
        [{ 'align': [] }, {'list': 'bullet'}, {'list': 'ordered'}],
        ['link', 'image'],
        [{'indent': '+1'}, {'indent': '-1'}],
        [{ 'script': 'sub'}, { 'script': 'super' }, 'clean']
      ]
    };
  }

  updateQuill(value) {
    if (this.quillRef) {
      this.setState({
        body: value,
        plain_text_body: this.quillRef.getText()
      }, () => {
        if (this.state.title || this.state.body) {
          document.querySelector('.add-note').disabled = false;
        } else {
          document.querySelector('.add-note').disabled = true;
        }
      });
    }
  }

  updateTitle(event) {
    this.setState({
      title: event.currentTarget.value
    }, () => {
      if (this.state.title || this.state.body) {
        document.querySelector('.add-note').disabled = false;
      } else {
        document.querySelector('.add-note').disabled = true;
      }
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
    const { notebooks } = this.props;
    let notebookSelectItems;
    if (notebooks) {
      notebookSelectItems = notebooks.allIds.map((notebookId, idx) =>
        <section className="notebook-select-item-container">
          <li
            key={ idx }
            className="notebook-select-item">
            { notebooks.byId[notebookId].title }
          </li>
        </section>
      );
    }
    return(
      <section className="new-note-container">
        <section className="note-select-options">
          <img
            src="https://res.cloudinary.com/malice/image/upload/v1500410337/notebook-small-gray_hutdbh.png"
            alt="Notebook Icon"
            className="small-notebook-icon"
            onClick={ this.selectNotebook } />
            <ul className="notebook-dropdown hidden">
              <li className="select-add-notebook">
                <img
                  src="https://res.cloudinary.com/malice/image/upload/v1500766546/add-notebook.png"
                  alt="Add Notebook Icon"
                  className="select-add-notebook-icon" />
                Create new notebook
              </li>
              { notebookSelectItems }
            </ul>
          <nav
            className="select-notebook"
            onClick={ this.selectNotebook }>
            Notebook
          </nav>
        </section>
        <button
          className="cancel hidden"
          onClick ={ this.handleCancel }>Cancel</button>
        <button
          className="add-note hidden"
          onClick ={ this.handleAddNote }>Save Note</button>
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
          theme={'snow'}
          modules={ this.modules } />
      </section>
    );
  }
}

export default NewNote;
