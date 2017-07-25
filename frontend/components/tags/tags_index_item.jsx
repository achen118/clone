import React from 'react';

class TagsIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.history.push(`/tags/${this.props.tag.name}/notes`);
  }

  render() {
    const { tag } = this.props;
    return (
      <section
        className="tag-index-item-container"
        onClick={ this.handleClick }>
        <section className="tag-index-item">
          <h3>{ tag.name } {tag.notes.length}</h3>
        </section>
      </section>
    );
  }

}

export default TagsIndexItem;
