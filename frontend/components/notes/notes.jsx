import React from 'react';
import NotesHeader from './notes_header';
import SidebarContainer from '../sidebar/sidebar_container';
import NotesIndexContainer from './notes_index_container';
import NoteDetailContainer from './note_detail_container';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container';
import TagsIndexContainer from '../tags/tags_index_container';

class Notes extends React.Component {

  componentWillReceiveProps(nextProps) {
    const nextId = nextProps.match.params.noteId;
    if (this.props.match.params.noteId !== nextId) {
      this.props.fetchSingleNote(nextId);
    }
    if (nextProps.location.pathname === '/notebooks') {
      this.setState({
        notebooksOpen: true,
        tagsOpen: false
      });
    }
    if (nextProps.location.pathname === '/tags') {
      this.setState({
        tagsOpen: true,
        notebooksOpen: false
      });
    }
    if (nextProps.location.pathname === '/notes') {
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
    const { notes, note, location } = this.props;
    let noteDetail, notebookIndex, tagIndex;
    if (note) {
      noteDetail = <NoteDetailContainer note={ note } />;
    } else {
      noteDetail = <NoteDetailContainer note={ notes.byId[notes.allIds[0]] } />;
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
            <NotesHeader noteCount={ notes.allIds.length } />
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
