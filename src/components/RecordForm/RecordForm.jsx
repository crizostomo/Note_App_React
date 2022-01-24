import React, { Component } from "react";
import "./style.css";

export default class RecordForm extends Component {
  render() {
    return (
      <form className="form-record ">
        <input
          type="text"
          placeholder="Title"
          className="form-record_input"
        />
        <textarea
          rows={15}
          placeholder="Write your note..."
          className="form-record_input"
        />
        <button className="form-record_input form-record_submit">
          Create Note
        </button>
      </form>
    );
  }
}
