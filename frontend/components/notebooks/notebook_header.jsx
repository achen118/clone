import React from 'react';
import Modal from 'react-modal';

class NotebookHeader extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.notebooks.allIds.length > 0) {
      this.setState({
        title: nextProps.notebooks.byId[nextProps.notebookId].title
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.notebookId,
      title: "",
      modalIsOpen: false
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSave = this.handleSave.bind(this);
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

  updateTitle(event) {
    this.setState({
      title: event.target.value
    }, () => {
      if (this.state.title) {
        document.querySelector('.notebook-modal-save').disabled = false;
      } else {
        document.querySelector('.notebook-modal-save').disabled = true;
      }
    });
  }

  handleSave() {
    this.props.updateNotebook(this.state)
      .then(() =>
        this.closeModal());
  }

  render() {
    const { notebooks, notes, notebookId } = this.props;
    let header;
    if (notebooks.allIds.length > 0) {
      header =
      <section>
        <section className="notebook-header-container">
          <img
            src="https://res.cloudinary.com/malice/image/upload/v1501217872/info-big_c1nkdi.png"
            alt="Notebook Info"
            className="notebook-info"
            onClick={ this.openModal } />
          <h1 className="notebook-header">{ notebooks.byId[notebookId].title }</h1>
          <ul className="notes-header-info">
            <li className="note-count">{ notes.allIds.length } notes</li>
          </ul>
        </section>;
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={ this.customStyles }
          contentLabel="Notebook Info">
          <section className="modal-container">
            <img
              src="https://res.cloudinary.com/malice/image/upload/v1501217872/info-big_c1nkdi.png"
              alt="Notebook Info Icon"
              className="modal-icon" />
            <section
              className="modal-header">
              NOTEBOOK INFO
            </section>
            <span className="modal-subheader">Overview</span>
            <input
              value={ this.state.title }
              onChange={ this.updateTitle }
              className="notebook-modal-input" />
            <section
              className="notebook-modal-title">
              TITLE
            </section>
            <section
              className="notebook-modal-delete">
              Delete Notebook
            </section>
            <section
              className="notebook-modal-buttons">
              <button
                onClick={ this.closeModal }
                className="notebook-modal-cancel">
                Cancel
              </button>
              <button
                onClick={ this.handleSave }
                className="notebook-modal-save">
                Save
              </button>
            </section>
          </section>
        </Modal>
      </section>;
    }
    return (
      <div>
        { header }
      </div>
    );
  }
}

export default NotebookHeader;
