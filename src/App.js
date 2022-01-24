import React, { Component } from "react";
import GradeList from "./components/NoteList/NoteList";
import RecordForm from "./components/RecordForm/RecordForm";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {
  render() {
    return (
      <section className="content">
        <RecordForm />
        <GradeList />
      </section>
    );
  }
}

export default App;
