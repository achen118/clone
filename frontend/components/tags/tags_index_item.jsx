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
    let tagItem;
    if (tag) {
      tagItem =
        <section
          className="tag-index-item"
          onClick={ this.handleClick }>
          <h3>{ tag.name } {tag.notes.length}</h3>
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
