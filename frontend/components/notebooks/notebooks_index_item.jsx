import React from 'react';

class NotebooksIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(event) {
    this.props.history.push(`/notebooks/${this.props.notebook.id}/notes`);
  }

  handleDelete(event) {
    event.stopPropagation();
    this.props.deleteNotebook(this.props.notebook)
      .then(() => this.props.fetchAllNotebooks());
  }

  render() {
    const { notebook } = this.props;
    return (
      <section
        className="notebook-index-item-container"
        onClick={ this.handleClick }>
        <section className="notebook-index-item">
          <figure
            className="notebook-delete"
            onClick={ this.handleDelete }>
          </figure>
          <h3>{ notebook.title }</h3>
          <h4>{ notebook.notes.length } notes</h4>
        </section>
      </section>
    );
  }

}

export default NotebooksIndexItem;
