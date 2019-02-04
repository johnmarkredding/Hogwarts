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
  deleteCharacter = (deletedChar) => {
    fetch(`http://localhost:3001/characters/${deletedChar.id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      }
    })
    .then(() => this.handleDeletedCharacter(deletedChar));
  }

  handleDeletedCharacter = (deletedChar) => {
    let characters = this.state.characters.filter(char => char.id !== deletedChar.id);
    this.setState({characters});
  }
  handleUpdatedCharacter = (updatedChar) => {
    let characters = [...this.state.characters];
    let index = characters.indexOf(characters.find(char => char.id === updatedChar.id));
    characters[index] = updatedChar;
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
        <Characters deleteCharacter={this.deleteCharacter} updateCharacter={this.updateCharacter} characters={this.filteredCharacters()}/>
        <NewCharacterForm createCharacter={this.createCharacter} />
        <Houses updateCharacter={this.updateCharacter} characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
