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
    this.selectNotebook = this.selectNotebook.bind(this);
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

  selectNotebook() {
    document.querySelector('.notebook-dropdown').classList.toggle('hidden');
  }

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
      <div className="note-container">
        <section className="note-select-options">
          <img
            src="https://res.cloudinary.com/malice/image/upload/v1500410337/notebook-small-gray_hutdbh.png"
            alt="Notebook Icon"
            className="small-notebook-icon" />
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
        <input
          type="text"
          placeholder="Title your note"
          value={ this.state.title }
          onChange={ this.updateTitle }
          onKeyUp={ this.startAutosaveTimer } />
        <ReactQuill
          ref={(el) => { this.reactQuillRef = el; }}
          value={ this.state.body }
          onChange={ this.updateQuill }
          placeholder="Just start typing..."
          theme={'snow'}
          modules={ this.modules } />
      </div>
    );
  }
}

export default Note;
