import React from "react";
import "../../CSS/House.css";

class Icon extends React.Component {
  render() {
    return (
      <div className="icon">
        <i className={`${this.props.house.toLowerCase()}-icon`}></i>
      </div>
    );
  }
};

export default Icon;
