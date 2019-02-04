import React from "react";
import "../../CSS/House.css";

class Icon extends React.Component {
  showIcon() {
    if (this.props.layout === "tile") {
      return (
        <div className="icon-tile">
          <i className={`${this.props.house.toLowerCase()}-icon-tile`}></i>
        </div>
      );
    } else {
      return (
        <div className="icon">
          <i className={`${this.props.house.toLowerCase()}-icon`}></i>
        </div>
      );
    }
  }
  render() {
    return this.showIcon();
  }
};

export default Icon;
