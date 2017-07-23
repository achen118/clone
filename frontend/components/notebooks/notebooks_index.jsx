import React from 'react';
import NotebooksIndexItemContainer from './notebooks_index_item_container';

class NotebookIndex extends React.Component {

  componentWillMount() {
    this.props.fetchAllNotebooks();
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, notebooks } = this.props;
    let notebooksIndex;
    if (notebooks) {
      notebooksIndex = notebooks.allIds.map((notebookId, idx) =>
        <NotebooksIndexItemContainer
          notebook={ notebooks.byId[notebookId] }
          key={ idx }/>);
    }
    return (
      <section className={ classes }>
        <h1 className="notebooks-header">NOTEBOOKS</h1>
        <figure>
          <img
            src="http://res.cloudinary.com/malice/image/upload/v1500766546/add-notebook.png"
            alt="Add Notebook"
            className="add-notebook-icon" />
        </figure>
        { notebooksIndex }
      </section>
    );
  }

}

export default NotebookIndex;
