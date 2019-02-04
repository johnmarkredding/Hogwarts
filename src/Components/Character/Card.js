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
  updateHouse = (e) => {
    let element = {};
    e.persist();
    if (e.target.className.includes("-icon")) {
      element = e.target.parentNode.parentNode;
    } else if (e.target.className === "icon") {
      element = e.target.parentNode;
    } else {
      element = e.target;
    }
    this.props.character.house = element.dataset.house;
    this.props.updateCharacter(this.props.character);
    this.toggleEditForm();
  }

  deleteCharacter = () => {
    this.props.deleteCharacter(this.props.character);
  }


  render() {
    return (
      <article className={`${this.props.character.house.toLowerCase()}-card`}>
        <img alt={this.props.character.name} src={this.props.character.image1}/>
        <h3>{this.props.character.name}</h3>
        <HouseButton callback={this.toggleEditForm} character={this.props.character} house={this.props.character.house} layout="tile"/>
        <button onClick={this.deleteCharacter} className="delete-button">Delete Character</button>
        {this.state.editing ? this.showEditForm() : null}
      </article>
    );
  }
}

export default CharacterCard;
