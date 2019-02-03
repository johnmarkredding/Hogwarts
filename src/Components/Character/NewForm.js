import React from "react";

class CharacterForm extends React.Component {
  render() {
    return (
      <section className="new-character">
        <form>
          <div>
            <label>Name</label>
            <input type="text" name="" />
          </div>
          <div>
            <label>Age</label>
            <input type="text" name="" />
          </div>
          <div>
            <label>Role</label>
            <input type="text" name="" />
          </div>
          <div>
            <label>Image 1</label>
            <input type="text" name="" />
          </div>
          <div>
            <label>Image 2</label>
            <input type="text" name="" />
          </div>
          <div>
            <label>House</label>
            <select>
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
