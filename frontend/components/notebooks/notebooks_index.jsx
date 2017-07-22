import React from 'react';

class NotebookIndex extends React.Component {

  componentWillMount() {
    this.props.fetchAllNotebooks();
  }

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { classes, notebooks } = this.props;
    return (
      <section className={ classes }>
        <h1 className="notebooks-header">NOTEBOOKS</h1>

      </section>
    );
  }

}

export default NotebookIndex;
