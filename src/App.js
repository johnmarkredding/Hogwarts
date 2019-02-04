import React, { Component } from "react";
import "./CSS/reset.css";
import "./App.css";
import Characters from "./Containers/Character";
import Houses from "./Containers/House";
import NewCharacterForm from "./Components/Character/NewForm";
import SearchForm from "./Components/SearchForm";

class App extends Component {
  state = {
    characters: [],
    searchTerm: ""
  }

  componentDidMount() {
    this.getData("http://localhost:3001/characters", this.setDataToState);
  }
  setDataToState = (characters) => {
    this.setState({
      characters
    });
  }
  getData = (url, cb) => {
    fetch(url)
      .then(res => res.json())
      .then(cb);
  }

  createCharacter = (newChar) => {
    fetch("http://localhost:3001/characters", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newChar)
    })
    .then(res => res.json())
    .then(this.handleNewCharacter);
  }
  updateCharacter = (updatedChar) => {
    fetch(`http://localhost:3001/characters/${updatedChar.id}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedChar)
    })
    .then(res => res.json())
    .then((json) => this.handleUpdatedCharacter({...updatedChar, ...json}));
  }

  handleUpdatedCharacter = (updatedChar) => {
    let characters = [...this.state.characters];
    let characterToUpdate = characters.find(char => char.id === updatedChar.id);
    characterToUpdate = updatedChar;
    this.setState({characters});
  }
  handleNewCharacter = (newChar) => {
    let characters = [...this.state.characters, newChar];
    this.setState({characters});
  }

  filterCharacters = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }
  filteredCharacters = () => {
    return this.state.characters.filter(char => this.matchCharacterToTerm(char));
  }
  matchCharacterToTerm = (char) => {
    return (
      char.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
      char.house.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  }

  render() {
    return (
      <div className="app">
        <SearchForm filterCharacters={this.filterCharacters} />
        <Characters updateCharacter={this.updateCharacter} characters={this.filteredCharacters()}/>
        <NewCharacterForm createCharacter={this.createCharacter} />
        <Houses updateCharacter={this.updateCharacter} characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
