import React from "react";
import HouseIcon from "./Icon";

class HouseButton extends React.Component {

  getClassName() {
    if (this.props.layout === "tile") {
      return `${this.props.house.toLowerCase()}-button-tile`;
    } else {
      return `${this.props.house.toLowerCase()}-button`;
    }
  }
  render(){
    return (
      <button style={this.props.style} onClick={this.props.callback} data-house={this.props.house} className={this.getClassName()}>
        <HouseIcon house={this.props.house} layout={this.props.layout} />
      </button>
    );
  }
};

HouseButton.defaultProps = {
  layout: "normal",
  style: null
}

export default HouseButton;
