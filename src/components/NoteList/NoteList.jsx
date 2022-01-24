import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import "./style.css";

export default class NoteList extends Component {
  render() {
    return (
      <ul className="note-list">
        {Array.of("Assignment", "Assignment", "Studies").map((categoria, index) => {
          return (
            <li className="note-list_item" key={index}>
              <div>{categoria}</div>
              <NoteCard />
            </li>
          );
        })}
      </ul>
    );
  }
}
