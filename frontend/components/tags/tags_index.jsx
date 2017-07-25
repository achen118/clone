import React from 'react';
import TagsIndexItemContainer from './tags_index_item_container';

class TagsIndex extends React.Component {

  componentWillMount() {
    this.props.fetchAllTags();
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/new-tag');
  }

  render() {
    const { classes, tags } = this.props;
    let tagsIndex;
    if (tags) {
      let firstLetters = tags.allNames.map(tagName => tagName[0]);
      firstLetters = [...new Set(firstLetters)];
      tagsIndex = firstLetters.map((letter, idx) => {
        return <section
                className="tag-index-item-container"
                key={ idx }>
          { letter.toUpperCase() }
          { tags.allNames
            .filter(tagName => tagName[0] === letter)
              .map((name, i) =>
                <TagsIndexItemContainer
                  tag={ tags.byName[name] }
                  key={ i } />)
          }
        </section>;
      });
    }
    return (
      <section className={ classes }>
        <h1 className="tags-header">TAGS</h1>
        <figure onClick={ this.handleClick }>
          <img
            src="http://res.cloudinary.com/malice/image/upload/v1500946017/new_tag_grey_vfnzdc.png"
            alt="Add Tag"
            className="add-tag-icon" />
        </figure>
        { tagsIndex }
      </section>
    );
  }

}

export default TagsIndex;
