import React from 'react';
import ReactQuill from 'react-quill';

class Note extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body
    };
    this.update = this.update.bind(this);
  }

  update(value) {
    this.setState({
      body: value
    });
  }

  render() {
    return(
      <ReactQuill value={this.state.body}
                  onChange={this.update} />
    );
  }
}

export default Note;
