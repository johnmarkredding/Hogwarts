import React from "react";
import HouseIcon from "./Icon";
import CharacterTile from "../Character/Tile";
import CharacterSection from "../Character/Section";

class House extends React.Component {
  state = {
    detailView: false,
    detailCharacter: null
  }

  toggleDetails = () => {
    this.setState({detailView: !this.state.detailView});
  }
  setDetailCharacter = (detailCharacter) => {
    this.setState({detailCharacter});
  }

  detailView = () => {
    return <CharacterSection updateCharacter={this.props.updateCharacter} toggleDetails={this.toggleDetails} setCharacter={this.setDetailCharacter} character={this.state.detailCharacter}/>;
  }

  characters = () => {
    let myChars = this.props.characters.filter(char => char.house === this.props.house);
    return myChars.map(char => <CharacterTile toggleDetails={this.toggleDetails} setCharacter={this.setDetailCharacter} key={char.id} character={char}/>);
  }
  render() {
    return (
      <article className={`${this.props.house.toLowerCase()}-house`}>
        {this.state.detailView ? this.detailView() : <HouseIcon house={this.props.house.toLowerCase()}/>}
        {!this.state.detailView ? this.characters() : null}
      </article>
    );
  };
};

export default House;
