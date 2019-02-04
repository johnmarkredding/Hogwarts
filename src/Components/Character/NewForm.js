import React from "react";
import HouseButton from "../House/Button";

class CharacterForm extends React.Component {
  state = {
    name: "",
    age: "",
    role: "",
    image1: "",
    image2: "",
    house: ""
  }

  styles = {
    active: {
      border: "solid 3px #000"
    },
    normal: {
      border: "solid 3px transparent"
    }
  }

  houseButtons = () => {
    let houses = ["Gryffindor","Slytherin","Hufflepuff","Ravenclaw"];
    return houses.map(house => <HouseButton style={this.state.house === house ? this.styles.active : this.styles.normal} callback={this.handleHouseSelection} key={house} house={house} layout="tile" />);
  }

  handleHouseSelection = (e) => {
    e.preventDefault();
    e.persist();
    let element = {};
    if (e.target.className.includes("-icon-tile")) {
      element = e.target.parentNode.parentNode;
    } else if (e.target.className === "icon-tile") {
      element = e.target.parentNode;
    } else {
      element = e.target;
    }

    this.setState({house: element.dataset.house});
  }

  handleChangeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  createCharacter = (e) => {
    e.preventDefault();
    let newCharacter = {...this.state};
    this.setState({
      name: "",
      age: "",
      role: "",
      image1: "",
      image2: "",
      house: ""
    });
    this.props.createCharacter(newCharacter);
  }

  render() {
    return (
      <section className="new-character">
        <h2>New Character</h2>
        <form onSubmit={this.createCharacter}>
          <div>
            <label>Name</label>
            <input required onChange={this.handleChangeState} type="text" name="name" value={this.state.name} />
          </div>
          <div>
            <label>Age</label>
            <input required onChange={this.handleChangeState} type="number" name="age" value={this.state.age} />
          </div>
          <div>
            <label>Role</label>
            <input required onChange={this.handleChangeState} type="text" name="role" value={this.state.role} />
          </div>
          <div>
            <label>Image 1</label>
            <input required onChange={this.handleChangeState} type="text" name="image1" value={this.state.image1} />
          </div>
          <div>
            <label>Image 2</label>
            <input required onChange={this.handleChangeState} type="text" name="image2" value={this.state.image2} />
          </div>
          <div>
            <label>House: {this.state.house}</label>
            <div className="house-button-group">
              {this.houseButtons()}
            </div>
          </div>
          <button>Create</button>
        </form>
      </section>
    );
  }
}

export default CharacterForm;
