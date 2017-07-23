import React from 'react';
import ReactQuill from 'react-quill';

class Note extends React.Component {

  componentDidMount() {
    this.attachQuillRefs();
  }

  componentDidUpdate() {
    this.attachQuillRefs();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.note.title,
      body: nextProps.note.body
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body
    };
    this.quillRef = null;      // Quill instance
    this.reactQuillRef = null; // ReactQuill component
    this.updateQuill = this.updateQuill.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateQuill(value) {
    this.setState({
      body: value
    });
  }

  updateTitle(event) {
    this.setState({
      title: event.currentTarget.value
    });
  }

  attachQuillRefs() {
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    this.quillRef = this.reactQuillRef.getEditor();
  }

  render() {
    console.log(this.state);
    return(
      <div className="note-container">
        <input
          type="text"
          value={ this.state.title }
          onChange={ this.updateTitle } />
        <ReactQuill
          ref={(el) => { this.reactQuillRef = el }}
          value={this.state.body}
          onChange={this.updateQuill}
          theme={'snow'}/>
      </div>
    );
  }
}

export default Note;
