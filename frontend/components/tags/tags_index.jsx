import React from 'react';

class TagsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <section className={ classes }>
        <h1 className="tags-header">TAGS</h1>

      </section>
    );
  }

}

export default TagsIndex;
