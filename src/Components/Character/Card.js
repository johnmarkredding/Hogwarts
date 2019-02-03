import React from "react";
import HouseIcon from "../House/Icon";
import "../../CSS/Character.css";

class CharacterCard extends React.Component {
  render() {
    return (
      <article className={`${this.props.character.house.toLowerCase()}-card`}>
        <img alt={this.props.character.name} src={this.props.character.image1}/>
        <h3>{this.props.character.name}</h3>
        <HouseIcon house={this.props.character.house}/>
      </article>
    );
  }
}

export default CharacterCard;
