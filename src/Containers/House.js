import React from "react";
import HouseCard from "../Components/House/Card";

export default class HouseContainer extends React.Component {
  houseCards = () => {
    let houses = ["Gryffindor","Slytherin","Hufflepuff","Ravenclaw"];
    return houses.map(house => <HouseCard key={house} updateCharacter={this.props.updateCharacter} characters={this.props.characters} house={house} />);
  }
  render() {
    return (
      <section className="house-container">
        {this.houseCards()}
      </section>
    );
  }
}
