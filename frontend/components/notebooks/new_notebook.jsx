import React from 'react';

class NewNotebook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }

  handleClick(action) {
    return event => {
      if (action === 'cancel') {
        this.props.history.goBack();
      } else {
        this.props.addNotebook(this.state);
        this.props.history.push('/notebooks');
      }
    };
  }

  update(event) {
    this.setState({
      title: event.currentTarget.value
    });
  }

  render() {
    return (
      <section className="new-notebook-container">
        <figure className="notebook-icon">
          <img src="https://res.cloudinary.com/malice/image/upload/v1500957249/notebook.png" alt="Notebook Icon" />
        </figure>
        <h3 className="new-notebook-header">Create Notebook</h3>
        <input
          type="text"
          className="new-notebook-input"
          placeholder="Title your notebook"
          value={ this.state.name }
          onChange={ this.update } />
        <section>
          <button onClick={ this.handleClick('cancel') }>Cancel</button>
          <button onClick={ this.handleClick('create') }>Create notebook</button>
        </section>
      </section>
    );
  }

}

export default NewNotebook;
