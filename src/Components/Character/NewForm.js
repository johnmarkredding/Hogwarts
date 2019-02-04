import React from "react";

class CharacterForm extends React.Component {
  state = {
    name: "",
    age: "",
    role: "",
    image1: "",
    image2: "",
    house: ""
  }

  changeStateHandler = (e) => {
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
            <input onChange={this.changeStateHandler} type="text" name="name" value={this.state.name} />
          </div>
          <div>
            <label>Age</label>
            <input onChange={this.changeStateHandler} type="number" name="age" value={this.state.age} />
          </div>
          <div>
            <label>Role</label>
            <input onChange={this.changeStateHandler} type="text" name="role" value={this.state.role} />
          </div>
          <div>
            <label>Image 1</label>
            <input onChange={this.changeStateHandler} type="text" name="image1" value={this.state.image1} />
          </div>
          <div>
            <label>Image 2</label>
            <input onChange={this.changeStateHandler} type="text" name="image2" value={this.state.image2} />
          </div>
          <div>
            <label>House</label>
            <select onChange={this.changeStateHandler} name="house" value={this.state.house}>
              <option></option>
              <option>Gryffindor</option>
              <option>Slytherin</option>
              <option>Hufflepuff</option>
              <option>Ravenclaw</option>
            </select>
          </div>
          <button>Create</button>
        </form>
      </section>
    );
  }
}

export default CharacterForm;
