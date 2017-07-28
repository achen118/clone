import React from 'react';

class TagsIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.tag.name
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.updateName = this.updateName.bind(this);
    this.editTag = this.editTag.bind(this);
  }

  handleClick(event) {
    this.props.history.push(`/tags/${this.props.tag.name}/notes`);
  }

  handleDelete(event) {
    event.stopPropagation();
    this.props.deleteTag(this.props.tag)
      .then(() => this.props.fetchAllTags());
  }

  handleEdit(event) {
    const editInput = document.getElementById(this.props.tag.name);
    editInput.classList.remove('hidden');
    editInput.focus();
  }

  updateName(event) {
    this.setState({
      name: event.currentTarget.value
    });
  }

  editTag(event) {
    const key = event.keyCode;
    if (key === 13) {
      this.props.updateTag(event.currentTarget.id, this.state)
        .then(() => {
          document.getElementById(this.props.tag.name).classList.add('hidden');
        }, errors => this.setState({
            name: this.props.tag.name
          }));
    }
  }

  render() {
    const { tag } = this.props;
    let tagItem;
    if (tag) {
      tagItem =
        <section className="tag-item-and-delete">
          <section className="tag-item-and-hidden-input">
            <section
              className="tag-index-item"
              onClick={ this.handleClick }>
              <h3>{ tag.name }</h3>
              <h4>{tag.notes.length}</h4>
            </section>
            <input
              id={ tag.name }
              type="text"
              value={ this.state.name }
              className="edit-tag-input hidden"
              onChange={ this.updateName }
              onKeyDown={ this.editTag } />
          </section>
          <figure
            className="edit-tag"
            onClick={ this.handleEdit }>
          </figure>
          <figure
            className="delete-tag"
            onClick={ this.handleDelete }>
          </figure>
        </section>;
    }
    return (
      <section>
        { tagItem }
      </section>
    );
  }

}

export default TagsIndexItem;
