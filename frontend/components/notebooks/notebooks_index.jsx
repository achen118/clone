import React from 'react';
import NotebooksIndexItemContainer from './notebooks_index_item_container';

class NotebooksIndex extends React.Component {

  componentWillMount() {
    this.props.fetchAllNotebooks();
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/new-notebook');
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
      <div>
        <section className={ classes }>
          <h1 className="notebooks-header">NOTEBOOKS</h1>
          <figure onClick={ this.handleClick }>
            <img
              src="https://res.cloudinary.com/malice/image/upload/v1500766546/add-notebook.png"
              alt="Add Notebook"
              className="add-notebook-icon" />
          </figure>
          { notebooksIndex }
        </section>
      </div>
    );
  }

}

export default NotebooksIndex;
