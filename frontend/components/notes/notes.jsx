import React from 'react';
import NotesHeader from './notes_header';
import SidebarContainer from '../sidebar/sidebar_container';
import NotesHeaderContainer from './notes_header_container';
import NotesIndexContainer from './notes_index_container';
import NoteDetail from './note_detail';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container';
import TagsIndexContainer from '../tags/tags_index_container';
import NotebookHeaderContainer from '../notebooks/notebook_header_container';

class Notes extends React.Component {

  componentWillMount() {
    if (this.props.match.params.notebookId) {
      this.props.fetchNotesFromNotebook(this.props.match.params.notebookId);
      this.header = <NotebookHeaderContainer notebookId={ this.props.match.params.notebookId } />;
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
    if (nextProps.location.pathname === '/notebooks') {
      this.setState({
        notebooksOpen: true,
        tagsOpen: false,
        panelOpen: true
      });
    } else if (nextProps.location.pathname === '/tags') {
      this.setState({
        tagsOpen: true,
        notebooksOpen: false,
        panelOpen: true
      });
    } else {
      this.setState({
        notebooksOpen: false,
        tagsOpen: false,
        panelOpen: true
      });
    }
    if (nextProps.location.pathname === '/new-note') {
      document.querySelector('.expand').classList.add('hidden');
      document.querySelector('.cancel').classList.remove('hidden');
      this.setState({
        panelOpen: false
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      panelOpen: true,
      notesbooksOpen: false,
      tagsOpen: false
    };
    this.header = <NotesHeaderContainer />;
    this.togglePanel = this.togglePanel.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  togglePanel() {
    this.setState({
      panelOpen: !this.state.panelOpen
    });
  }

  handleCancel() {
    this.props.history.push('/notes');
  }

  render() {
    console.log(this.props);
    const { notes, note, location } = this.props;
    let noteDetail, notebookIndex, tagIndex;
    if (note) {
      noteDetail = <NoteDetail note={ note } />;
    } else {
      noteDetail = <NoteDetail note={ notes.byId[notes.allIds[0]] } />;
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
    return (
      <div className="notes-container">
        { notebookIndex }
        { tagIndex }
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
        <button className="cancel hidden" onClick ={ this.handleCancel }>Cancel</button>
      </div>
    );
  }

}

export default Notes;
