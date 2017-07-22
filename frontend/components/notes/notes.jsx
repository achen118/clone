import React from 'react';
import NotesHeader from './notes_header';
import SidebarContainer from '../sidebar/sidebar_container';
import NotesIndexContainer from './notes_index_container';
import NoteDetailContainer from './note_detail_container';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container';

class Notes extends React.Component {

  componentWillReceiveProps(nextProps) {
    const nextId = nextProps.match.params.noteId;
    if (this.props.match.params.noteId !== nextId) {
      this.props.fetchSingleNote(nextId);
    }
    if (nextProps.location.pathname === '/notebooks') {
      this.setState({
        notebooksOpen: true
      });
    }
    if (nextProps.location.pathname === '/notes') {
      this.setState({
        notebooksOpen: false
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      panelOpen: true,
      notesbooksOpen: false
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({
      panelOpen: !this.state.panelOpen
    });
  }

  toggleNotebooks() {
    this.setState({
      notebooksOpen: !this.state.notebooksOpen
    });
  }

  render() {
    const { notes, note, location } = this.props;
    let noteDetail, notebookIndex;
    if (note) {
      noteDetail = <NoteDetailContainer note={ note } />;
    } else {
      noteDetail = <NoteDetailContainer note={ notes.byId[notes.allIds[0]] } />;
    }
    const { panelOpen, notebooksOpen } = this.state;
    const panelClassName = panelOpen ? 'panel open' : 'panel';
    const contentClassName = panelOpen ? 'content open' : 'content';
    const notebookClassName = notebooksOpen ? 'notebooksPanel open' : 'notebooksPanel';
    if (notebookClassName) {
      notebookIndex = <NotebooksIndexContainer classes={ notebookClassName } />;
    }
    return (
      <div className="notes-container">
        { notebookIndex }
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
