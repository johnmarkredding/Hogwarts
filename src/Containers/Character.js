import React from "react";
import Character from "../Components/Character/Card";

export default class CharacterContainer extends React.Component {

  characters = () => {
    return this.props.characters.map(character => <Character updateCharacter={this.props.updateCharacter} key={character.id} character={character}/>);
  }
  render() {
    return (<aside className="characters">{this.characters()}</aside>);
  }
}
