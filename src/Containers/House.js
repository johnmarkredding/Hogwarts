import React from "react";
import HouseCard from "../Components/House/Card";

export default class HouseContainer extends React.Component {
  render() {
    return (
      <section className="house-container">
        <HouseCard house={"gryffindor"} />
        <HouseCard house={"slytherin"} />
        <HouseCard house={"hufflepuff"} />
        <HouseCard house={"ravenclaw"} />
      </section>
    );
  }
}
