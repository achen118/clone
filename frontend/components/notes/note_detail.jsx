import React from 'react';
import NoteContainer from './note_container';
import NewNoteContainer from './new_note_container';
import Modal from 'react-modal';

class NoteDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        border                : 'null',
        background            : 'white',
        width                 : '400px',
        height                : 'auto'
      },
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'white'
      }
    };
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  handleDelete() {
    this.props.deleteNote(this.props.note)
      .then(() => this.props.history.push('/notes'));
  }

  render() {
    const { note, location } = this.props;
    let showNote;
    if (location.pathname === '/new-note') {
      showNote =  <NewNoteContainer />;
    } else {
      if (note) {
        showNote =
        <section>
          <section className="note-detail-container">
            <header className="note-detail-header">
              <figure
                className="note-detail-info"
                onClick={ this.openModal }>
              </figure>
              <figure
                className="note-detail-delete"
                onClick={ this.handleDelete }>
              </figure>
            </header>
            <NoteContainer note={ note } />
          </section>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={ this.customStyles }
            contentLabel="Note Info">
            <section className="modal-container">
              <img
                src="https://res.cloudinary.com/malice/image/upload/v1501217872/info-big_c1nkdi.png"
                alt="Notebook Info Icon"
                className="modal-icon" />
              <section
                className="modal-header">
                NOTE INFO
              </section>
              <section className="note-modal-title">
                { note.title }
              </section>
              <span className="modal-subheader">Overview</span>
              <ul className="note-overview-item">
                <li>
                  CREATED:
                </li>
                <li>
                  { note.created_at }
                </li>
              </ul>
              <ul className="note-overview-item">
                <li>
                  UPDATED:
                </li>
                <li>
                  { note.updated_at }
                </li>
              </ul>
              <button
                onClick={ this.closeModal }
                className="note-close-button">
                Close
              </button>
            </section>
          </Modal>
        </section>;
      }
    }
    return (
      <div>
        { showNote }
      </div>
    );
  }
}

export default NoteDetail;
