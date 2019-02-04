import React from "react";
import HouseIcon from "./Icon";

class HouseButton extends React.Component {
  handleClick = () => {
    this.props.character.house = this.props.house;
    this.props.callback(this.props.character);
  }
  render(){
    return (
      <button onClick={this.handleClick} className={`${this.props.house.toLowerCase()}-button`}>
        <HouseIcon house={this.props.house} />
      </button>
    );
  }
};

export default HouseButton;
