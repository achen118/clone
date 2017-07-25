import React from 'react';
import TagsIndexItemContainer from './tags_index_item_container';

class TagsIndex extends React.Component {

  componentWillMount() {
    this.props.fetchAllTags();
  }

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { classes, tags } = this.props;
    let tagsIndex;
    if (tags) {
      tagsIndex = tags.allNames.map((tagName, idx) =>
        <TagsIndexItemContainer
          tag={ tags.byName[tagName] }
          key={ idx }/>);
    }
    return (
      <section className={ classes }>
        <h1 className="tags-header">TAGS</h1>
        <figure>
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
