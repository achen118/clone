import React from 'react';

class NotebookIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <section className={ classes }>
        <h1 className="notebooks-header">NOTEBOOKS</h1>

      </section>
    );
  }

}

export default NotebookIndex;
