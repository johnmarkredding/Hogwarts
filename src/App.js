import React, { Component } from "react";
import "./CSS/reset.css";
import "./App.css";
import Characters from "./Containers/Character";
import Houses from "./Containers/House";
import NewCharacterForm from "./Components/Character/NewForm";
import SearchForm from "./Components/SearchForm";

class App extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    this.gatherData("http://localhost:3001/characters", this.setDataToState);
  }
  setDataToState = (characters) => {
    this.setState({
      characters
    });
  }
  gatherData = (url, cb) => {
    fetch(url)
      .then(res=> res.json())
      .then(cb);
  }


  render() {
    return (
      <div className="app">
        <SearchForm />
        <Characters characters={this.state.characters}/>
        <NewCharacterForm />
        <Houses />
      </div>
    );
  }
}

export default App;
