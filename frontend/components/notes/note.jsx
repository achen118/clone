import React from 'react';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';

class Note extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.note.title,
      body: nextProps.note.body
    });
    this.modules = {
      toolbar: [
        [{ 'font': [] }],
        [{ 'size': [] }],
        [{ 'color': []}, 'bold', 'italic', 'underline','strike', 'code-block'],
        [{'list': 'bullet'}, {'list': 'ordered'}],
        ['link', 'image'],
        ['align', {'indent': '+1'}, {'indent': '-1'}],
        ['script'],
        ['clean']
      ]
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body
    };
    this.update = this.update.bind(this);
  }

  update(value) {
    this.setState({ body: value });
  }

  render() {
    return(
      <section className="note-container">
        <div id="editor">
          <ReactQuill
            modules={ this.modules }
            value={ this.state.body }
            onChange={ this.update }
          />
        </div>
      </section>
    );
  }
}

export default Note;
