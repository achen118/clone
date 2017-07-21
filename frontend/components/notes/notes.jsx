import React from 'react';
import NotesHeader from './notes_header';
import SidebarContainer from '../sidebar/sidebar_container';
import NotesIndexContainer from '../notes/notes_index_container';
import NoteDetailContainer from '../notes/note_detail_container';

class Notes extends React.Component {

  componentWillMount() {
    this.props.fetchSingleNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(nextProps) {
    const nextId = nextProps.match.params.noteId;
    if (this.props.match.params.noteId !== nextId) {
      this.props.fetchSingleNote(nextId);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      panelOpen: true
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
    let noteDetail;
    if (note) {
      noteDetail = <NoteDetailContainer note={ note } />;
    } else {
      noteDetail = <NoteDetailContainer note={ notes.byId[notes.allIds[0]] } />;
    }
    const { panelOpen } = this.state;
    const panelClassName = panelOpen ? 'panel open' : 'panel';
    const contentClassName = panelOpen ? 'content open' : 'content';
    return (
      <div className="notes-container">
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
