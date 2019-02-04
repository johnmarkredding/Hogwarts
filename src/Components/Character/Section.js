import React from "react";
import CharacterTile from "./Tile";
import HouseButton from "../House/Button";
import UpdateHouseForm from "./UpdateHouseForm";

class CharacterDetails extends React.Component {
  state = {
    editing: false
  }
  setupDetailView = () => {
    this.props.setCharacter(null);
    this.props.toggleDetails();
  }
  updateHouse = (e) => {
    e.preventDefault();
    e.persist();
    let element = {};
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
    this.props.toggleDetails();
  }
  showEditForm = () => {
    return <UpdateHouseForm callback={this.updateHouse} character={this.props.character} />;
  }
  toggleEditForm = () => {
    this.setState({
      editing: !this.state.editing
    });
  }

  render() {
    return (
      <article className="character-section">
        <CharacterTile character={this.props.character}/>
        <p>{this.props.character.name}</p>
        <p>{this.props.character.role}</p>
        <p>{this.props.character.age}</p>
        <HouseButton callback={this.toggleEditForm} character={this.props.character} house={this.props.character.house} />
        {this.state.editing ? this.showEditForm() : null}
        <button className="close" onClick={this.setupDetailView}><svg viewBox="0 0 97 97" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M42.18 48.18L0 5.86 5.65 0l42.4 42.32L90.23 0l5.87 5.86-42.18 42.32L96.1 90.3l-5.87 5.86-42.18-42.32-42.4 42.32L0 90.29z" fillRule="evenodd"/></svg></button>
      </article>
    );
  }
}

export default CharacterDetails;
