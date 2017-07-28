import React from 'react';
import NotesHeader from './notes_header';
import SidebarContainer from '../sidebar/sidebar_container';
import NotesHeaderContainer from './notes_header_container';
import NotesIndexContainer from './notes_index_container';
import NoteDetailContainer from './note_detail_container';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container';
import TagsIndexContainer from '../tags/tags_index_container';
import NotebookHeaderContainer from '../notebooks/notebook_header_container';
import TagHeaderContainer from '../tags/tags_header_container';
import NewNotebookContainer from '../notebooks/new_notebook_container';
import NewTagContainer from '../tags/new_tag_container';

class Notes extends React.Component {

  componentWillMount() {
    if (this.props.match.params.notebookId) {
      this.props.fetchNotesFromNotebook(this.props.match.params.notebookId);
      this.header = <NotebookHeaderContainer notebookId={ this.props.match.params.notebookId } />;
    } else if (this.props.match.params.tagName) {
      this.props.fetchNotesFromTag(this.props.match.params.tagName);
      this.header = <TagHeaderContainer tagName={ this.props.match.params.tagName } />;
    } else {
      this.props.fetchAllNotes();
    }
    if (this.props.match.params.noteId) {
      this.props.fetchSingleNote(this.props.match.params.noteId);
    }
    if (this.props.location.pathname === '/new-note') {
      this.setState({
        panelOpen: false
      });
    }
    if (this.props.location.pathname === '/new-notebook') {
      this.newNotebook = true;
    } else {
      this.newNotebook = false;
    }
    if (this.props.location.pathname === '/new-tag') {
      this.newTag = true;
    } else {
      this.newTag = false;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== '/notes' && nextProps.location.pathname === '/notes') {
      this.props.fetchAllNotes();
      this.header = <NotesHeaderContainer />;
    }
    if (nextProps.match.params.noteId && this.props.match.params.noteId !== nextProps.match.params.noteId) {
      this.props.fetchSingleNote(nextProps.match.params.noteId);
    }
    if (nextProps.match.params.notebookId && this.props.match.params.notebookId !== nextProps.match.params.notebookId) {
      this.props.fetchNotesFromNotebook(nextProps.match.params.notebookId);
      this.header = <NotebookHeaderContainer notebookId={ nextProps.match.params.notebookId } />;
    }
    if (nextProps.match.params.tagName && this.props.match.params.tagName !== nextProps.match.params.tagName) {
      this.props.fetchNotesFromTag(nextProps.match.params.tagName);
      this.header = <TagHeaderContainer tagName={ nextProps.match.params.tagName } />;
    }
    if (nextProps.location.pathname === '/notebooks') {
      this.newNotebook = false;
      this.newTag = false;
      this.setState({
        notebooksOpen: true,
        tagsOpen: false,
        panelOpen: true,
        overlay: true
      });
    } else if (nextProps.location.pathname === '/tags') {
      this.newNotebook = false;
      this.newTag = false;
      this.setState({
        tagsOpen: true,
        notebooksOpen: false,
        panelOpen: true,
        overlay: true
      });
    } else if (nextProps.location.pathname === '/new-notebook') {
      this.newNotebook = true;
      this.newTag = false;
    } else if (nextProps.location.pathname === '/new-tag') {
      this.newTag = true;
      this.newNotebook = false;
    } else {
      this.newTag = false;
      this.newNotebook = false;
      this.setState({
        notebooksOpen: false,
        tagsOpen: false,
        panelOpen: true,
        overlay: false
      });
    }
    if (nextProps.location.pathname === '/new-note') {
      document.querySelector('.expand').classList.add('hidden');
      this.setState({
        panelOpen: false
      });
    } else {
      document.querySelector('.expand').classList.remove('hidden');
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      panelOpen: true,
      notesbooksOpen: false,
      tagsOpen: false,
      overlay: false
    };
    this.header = <NotesHeaderContainer />;
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({
      panelOpen: !this.state.panelOpen
    });
  }

  render() {
    const { notes, note, location } = this.props;
    let noteDetail, notebookIndex, tagIndex, newNotebook, newTag;
    if (this.newNotebook) {
      newNotebook = <NewNotebookContainer />;
    }
    if (this.newTag) {
      newTag = <NewTagContainer />;
    }
    if (note) {
      noteDetail = <NoteDetailContainer
                    note={ note }
                    location={ location } />;
    } else {
      noteDetail = <NoteDetailContainer
                    note={ notes.byId[notes.allIds[0]] }
                    location={ location } />;
    }
    const { panelOpen, notebooksOpen, tagsOpen } = this.state;
    const panelClassName = panelOpen ? 'panel open' : 'panel';
    const contentClassName = panelOpen ? 'content open' : 'content';
    const notebookClassName = notebooksOpen ? 'notebooksPanel open' : 'notebooksPanel';
    const tagClassName = tagsOpen ? 'tagsPanel open' : 'tagsPanel';
    if (notebookClassName) {
      notebookIndex = <NotebooksIndexContainer classes={ notebookClassName } />;
    }
    if (tagClassName) {
      tagIndex = <TagsIndexContainer classes={ tagClassName } />;
    }
    if (this.state.overlay) {
      document.querySelector('.overlay').classList.remove('hidden');
    } else {
      if (document.querySelector('.overlay')) {
        document.querySelector('.overlay').classList.add('hidden');
      }
    }
    return (
      <div className="notes-container">
        { newNotebook }
        { newTag }
        { notebookIndex }
        { tagIndex }
        <section className="overlay hidden"></section>
        <section className={ panelClassName }>
          <SidebarContainer />
          <section className="notes-header-and-index">
            { this.header }
            <NotesIndexContainer />
          </section>
        </section>
        <section className={ contentClassName }>
          { noteDetail }
        </section>
        <figure className="expand" onClick={ this.togglePanel }>
        </figure>
      </div>
    );
  }

}

export default Notes;
