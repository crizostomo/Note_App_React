import React, { Component } from "react";
import NoteList from "./components/NoteList/NoteList";
import RecordForm from "./components/RecordForm/RecordForm";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  
  constructor(){
    super();
    this.state = {
      notes:[]
    }
  }

  createNote(title, text){
    const newNote = {title, text};
    const newArrayNotes = [...this.state.notes, newNote]
    const newStatte = {
      notes:newArrayNotes
    }
    this.setState(newStatte)
  }

  render() {
    return (
      <section className="content">
        <RecordForm createNote={this.createNote.bind(this)}/>
        <NoteList notes={this.state.notes}/>
      </section>
    );
  }
}

export default App;
