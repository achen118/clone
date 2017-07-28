import React from 'react';
import ReactQuill from 'react-quill';

class Note extends React.Component {

  componentDidMount() {
    this.attachQuillRefs();
    this.quillRef.focus();
    this.firstShow = true;
  }

  componentDidUpdate() {
    this.attachQuillRefs();
    this.firstShow = false;
  }

  componentWillUnmount() {
    clearTimeout(this.autosaveTimer);
  }

  componentWillReceiveProps(nextProps) {
    this.firstShow = true;
    this.attachQuillRefs();
    this.quillRef.focus();
    if (this.props !== nextProps) {
      clearTimeout(this.autosaveTimer);
    }
    this.notebookId = nextProps.note.notebook_id;
    this.setState({
      id: nextProps.note.id,
      title: nextProps.note.title,
      body: nextProps.note.body,
      plain_text_body: nextProps.note.plain_text_body,
      newTag: ""
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.id,
      title: this.props.note.title,
      body: this.props.note.body,
      plain_text_body: this.props.note.plain_text_body,
      notebook_id: this.notebookId,
      newTag: ""
    };
    this.notebookId = this.props.note.notebook_id;
    this.quillRef = null;      // Quill instance
    this.reactQuillRef = null; // ReactQuill component
    this.updateQuill = this.updateQuill.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.autosave = this.autosave.bind(this);
    this.startAutosaveTimer = this.startAutosaveTimer.bind(this);
    this.toggleNotebookDropDown = this.toggleNotebookDropDown.bind(this);
    this.handleAddNotebook = this.handleAddNotebook.bind(this);
    this.handleSelectNotebook = this.handleSelectNotebook.bind(this);
    this.handleDeleteTag = this.handleDeleteTag.bind(this);
    this.updateNewTag = this.updateNewTag.bind(this);
    this.addTagToNote = this.addTagToNote.bind(this);
    this.autosaveTimer = null;
    this.autosaveInterval = 500;
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
      });
      if (!this.firstShow) {
        this.startAutosaveTimer();
      }
    }
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
    this.autosaveTimer = setTimeout(this.autosave, this.autosaveInterval);
  }

  autosave() {
    this.props.updateNote(this.state)
      .then(() => {
        const lastSelected = document.querySelector(".selected-index-item");
        if (lastSelected) {
          lastSelected.classList.remove("selected-index-item");
        }
        document.getElementById(`${this.props.note.id}`).classList.add("selected-index-item");
      });
  }

  toggleNotebookDropDown() {
    document.querySelector('.notebook-dropdown').classList.toggle('hidden');
  }

  handleAddNotebook() {
    this.props.history.push('/new-notebook');
  }

  handleSelectNotebook(event) {
    if (this.notebookId !== event.target.id) {
      this.notebookId = event.target.id;
      this.setState({
        notebook_id: this.notebookId
      }, () => this.startAutosaveTimer());
    }
  }

  handleDeleteTag(event) {
    this.props.deleteTagFromNote(this.props.note.id, event.currentTarget.id)
      .then(() => this.props.fetchSingleNote(this.props.note.id),
        errors => this.setState({
          newTag: ""
        }));
  }

  updateNewTag(event) {
    this.setState({
      newTag: event.target.value
    });
  }

  addTagToNote(event) {
    const key = event.keyCode;
    if (key === 13) {
      this.props.addTagToNote(this.props.note.id, this.state.newTag)
        .then(() => this.props.fetchSingleNote(this.props.note.id),
          errors => this.setState({
            newTag: ""
          }));
    }
  }

  render() {
    console.log(this.state.body);
    console.log(this.state.plain_text_body);
    const { notebooks, note, tags } = this.props;
    let notebookSelectItems, currentNotebook, noteTagIndex;
    if (notebooks.allIds.length > 0) {
      currentNotebook = notebooks.byId[this.notebookId].title;
      notebookSelectItems = notebooks.allIds.map((notebookId, idx) =>
        <section
          key={ idx }
          className="notebook-select-item-container"
          onClick={ this.handleSelectNotebook }>
          <li
            key={ idx }
            className="notebook-select-item"
            id={ notebookId }>
            { notebooks.byId[notebookId].title }
          </li>
        </section>
      );
    }
    if (note) {
      noteTagIndex = note.tags.map((tagName, idx) =>
        <section
          key={ idx }
          className="note-tag-index-item">
          { tagName }
          <span
            id={ tagName }
            onClick={ this.handleDeleteTag }>
            x
          </span>
        </section>
      );
    }
    return(
      <div className="note-container">
        <section className="note-select-options">
          <img
            src="https://res.cloudinary.com/malice/image/upload/v1500410337/notebook-small-gray_hutdbh.png"
            alt="Notebook Icon"
            className="small-notebook-icon"
            onClick={ this.toggleNotebookDropDown } />
          <ul className="notebook-dropdown hidden">
            <li
              className="select-add-notebook"
              onClick={ this.handleAddNotebook }>
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
            onClick={ this.toggleNotebookDropDown }>
            { currentNotebook }
          </nav>
          <img
            src="https://res.cloudinary.com/malice/image/upload/v1500410338/tag-small-gray_riahyt.png"
            alt="Tag Icon"
            className="small-tag-icon" />
          <section className="note-tag-index">
            { noteTagIndex }
            <input
              className="new-note-tag"
              placeholder="+"
              onChange={ this.updateNewTag }
              onKeyDown={ this.addTagToNote }
              value={ this.state.newTag } />
          </section>
        </section>
        <input
          type="text"
          className="note-title"
          placeholder="Title your note"
          value={ this.state.title }
          onChange={ this.updateTitle }
          onKeyUp={ this.startAutosaveTimer } />
        <ReactQuill
          ref={(el) => { this.reactQuillRef = el; }}
          value={ this.state.body }
          onChange={ this.updateQuill }
          placeholder="Drag files here or just start typing..."
          theme={'snow'}
          modules={ this.modules } />
      </div>
    );
  }
}

export default Note;
