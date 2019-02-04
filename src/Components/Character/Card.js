import React from "react";
import HouseButton from "../House/Button";
import UpdateHouseForm from "./UpdateHouseForm";
import "../../CSS/Character.css";

class CharacterCard extends React.Component {
  state = {
    editing: false
  }
  showEditForm = () => {
    return <UpdateHouseForm callback={this.updateHouse} character={this.props.character} />;
  }
  toggleEditForm = () => {
    this.setState({
      editing: !this.state.editing
    });
  }
  updateHouse = (character) => {
    this.props.updateCharacter(character);
    this.toggleEditForm();
  }
  render() {
    return (
      <article className={`${this.props.character.house.toLowerCase()}-card`}>
        <img alt={this.props.character.name} src={this.props.character.image1}/>
        <h3>{this.props.character.name}</h3>
        <HouseButton callback={this.updateHouse} character={this.props.character} house={this.props.character.house}/>
        {this.state.editing ? this.showEditForm() : null}
      </article>
    );
  }
}

export default CharacterCard;
