import React from "react";
import HouseButton from "../House/Button";

class HouseForm extends React.Component {
  render() {
    return (
      <section id="edit-house-form">
        <HouseButton character={this.props.character} callback={this.props.callback} house="Gryffindor" />
        <HouseButton character={this.props.character} callback={this.props.callback} house="Slytherin" />
        <HouseButton character={this.props.character} callback={this.props.callback} house="Hufflepuff" />
        <HouseButton character={this.props.character} callback={this.props.callback} house="Ravenclaw" />
      </section>
    );
  }
}
export default HouseForm;
