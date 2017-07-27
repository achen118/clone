import React from 'react';

class TagsIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(event) {
    this.props.history.push(`/tags/${this.props.tag.name}/notes`);
  }

  handleDelete(event) {
    event.stopPropagation();
    this.props.deleteTag(this.props.tag)
      .then(() => this.props.fetchAllTags());
  }

  render() {
    const { tag } = this.props;
    let tagItem;
    if (tag) {
      tagItem =
        <section className="tag-item-and-delete">
          <section
            className="tag-index-item"
            onClick={ this.handleClick }>
            <h3>{ tag.name }</h3>
            <h4>{tag.notes.length}</h4>
          </section>
          <img
            src="https://res.cloudinary.com/malice/image/upload/v1501176811/delete_solid_gray_16x16_xzkyeg.png"
            alt="Delete Tag"
            className="delete-tag"
            onClick={ this.handleDelete } />
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
