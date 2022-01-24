import React, { Component } from "react";
import "./style.css";
export default class RecordForm extends Component {
  
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
  }

  _handleTitleChange(event){
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleTextChange(event){
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createNote(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text);
  }
  
  render() {
    return (
      <form className="form-record "
        onSubmit={this._createNote.bind(this)}
      >
        <input
          type="text"
          placeholder="Title"
          className="form-record_input"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Write your note..."
          className="form-record_input"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className="form-record_input form-record_submit">
          Create Note
        </button>
      </form>
    );
  }
}
