import React from 'react';
import ReactQuill from 'react-quill';

class Note extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "hello"
    };
    this.update = this.update.bind(this);
  }

  update(value) {
    this.setState({ text: value });
  }

  render() {
    console.log(this.state);
    return(
      <section className="note-container">
        <div id="editor">
          <ReactQuill
            value={ this.state.text }
            onChange={ this.update }
          />
        </div>
      </section>
    );
  }
}

export default Note;
