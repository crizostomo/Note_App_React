import React, { Component } from "react";
import "./style.css"

export default class NoteCard extends React.Component {
  render() {
    return (
      <section className="note-card">
        <header className="note-card_header">
          <h3 className="note-card_title">Title</h3>
        </header>
        <p className="note-card_textr">Write your note</p>
      </section>
    );
  }
}
