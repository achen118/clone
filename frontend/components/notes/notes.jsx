import React from 'react';
import NotesHeader from './notes_header';
import SidebarContainer from '../sidebar/sidebar_container';
import NotesHeaderContainer from './notes_header_container';
import NotesIndexContainer from './notes_index_container';
import NoteDetail from './note_detail';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container';
import TagsIndexContainer from '../tags/tags_index_container';

class Notes extends React.Component {

  componentWillMount() {
    if (this.props.match.params.notebookId) {
      this.props.fetchNotesFromNotebook(this.props.match.params.notebookId);
    } else {
      this.props.fetchAllNotes();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== '/notes' && nextProps.location.pathname === '/notes') {
      this.props.fetchAllNotes();
    }
    if (nextProps.match.params.noteId && this.props.match.params.noteId !== nextProps.match.params.noteId) {
      this.props.fetchSingleNote(nextProps.match.params.noteId);
    }
    if (nextProps.match.params.notebookId && this.props.match.params.notebookId !== nextProps.match.params.notebookId) {
      this.props.fetchNotesFromNotebook(nextProps.match.params.notebookId);
    }
    if (nextProps.location.pathname === '/notebooks') {
      this.setState({
        notebooksOpen: true,
        tagsOpen: false
      });
    } else if (nextProps.location.pathname === '/tags') {
      this.setState({
        tagsOpen: true,
        notebooksOpen: false
      });
    } else {
      this.setState({
        notebooksOpen: false,
        tagsOpen: false
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
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({
      panelOpen: !this.state.panelOpen
    });
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
            <NotesHeaderContainer />
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
