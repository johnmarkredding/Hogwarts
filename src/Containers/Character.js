import React from "react";
import Character from "../Components/Character/Card";

export default class CharacterContainer extends React.Component {

  characterList = () => {
    return this.props.characters.map(character => <Character key={character.name} character={character}/>);
  }
  render() {
    return (<aside className="characters">{this.characterList()}</aside>);
  }
}
