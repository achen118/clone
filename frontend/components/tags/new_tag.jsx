import React from 'react';
import ReactDOM from 'react-dom';

class NewTag extends React.Component {

  componentDidMount() {
    const elem = ReactDOM.findDOMNode(this);
  	elem.style.opacity = 0;
  	window.requestAnimationFrame(function() {
  		elem.style.transition = "opacity 500ms";
  		elem.style.opacity = 1;
  	});
    if (this.state.name) {
      document.querySelector('.new-tag-create').disabled = false;
    } else {
      document.querySelector('.new-tag-create').disabled = true;
    }
  }

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
        this.props.addTag(this.state)
          .then(this.props.history.push('/tags'));
      }
    };
  }

  update(event) {
    this.setState({
      name: event.currentTarget.value
    }, () => {
      if (this.state.name) {
        document.querySelector('.new-tag-create').disabled = false;
      } else {
        document.querySelector('.new-tag-create').disabled = true;
      }
    });
  }

  render() {
    return (
      <section className="new-tag-container">
        <figure className="tag-icon">
          <img src="https://res.cloudinary.com/malice/image/upload/v1500949290/tag.png" alt="Tag Icon" />
        </figure>
        <h3 className="new-tag-header">Create Tag</h3>
        <input
          type="text"
          className="new-tag-input"
          placeholder="Name your tag"
          value={ this.state.name }
          onChange={ this.update } />
        <section>
          <button
            className="new-tag-cancel"
            onClick={ this.handleClick('cancel') }>
            Cancel
          </button>
          <button
            className="new-tag-create"
            onClick={ this.handleClick('create') }>
            Create tag
          </button>
        </section>
      </section>
    );
  }

}

export default NewTag;
