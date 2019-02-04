import React from "react";

class CharacterTile extends React.Component {
  setupDetailView = () => {
    this.props.setCharacter(this.props.character);
    this.props.toggleDetails();
  }
  render() {
    return (
      <article onClick={this.setupDetailView} className={`${this.props.character.house.toLowerCase()}-tile`}>
        <img alt={this.props.character.name} src={this.props.character.image2}/>
      </article>
    );
  }
};

CharacterTile.defaultProps = {
  setCharacter: () => {},
  toggleDetails: () => {}
}

export default CharacterTile;
