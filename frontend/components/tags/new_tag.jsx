import React from 'react';

class NewTag extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }

  handleClick(action) {
    return event => {
      if (action === 'cancel') {
        this.props.history.goBack();
      } else {
        this.props.addTag(this.state);
        this.props.history.push('/tags');
      }
    };
  }

  update(event) {
    this.setState({
      name: event.currentTarget.value
    });
  }

  render() {
    return (
      <section className="new-tag-container">
        <figure className="tag-icon">
          <img src="http://res.cloudinary.com/malice/image/upload/v1500949290/tag.png" alt="Tag Icon" />
        </figure>
        <h3 className="new-tag-header">Create Tag</h3>
        <input
          type="text"
          className="new-tag-input"
          placeholder="Name your tag"
          value={ this.state.name }
          onChange={ this.update } />
        <section>
          <button onClick={ this.handleClick('cancel') }>Cancel</button>
          <button onClick={ this.handleClick('create') }>Create Tag</button>
        </section>
      </section>
    );
  }

}

export default NewTag;
