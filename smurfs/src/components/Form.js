import React from "react";
import { connect } from "react-redux";

import { postSmurf } from "./../actions";

const initialState = {
  name: "",
  age: "",
  height: "",
};

class Form extends React.Component {
  state = initialState;

  handleChanges = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  postNewSmurf = (e) => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
      id: Date.now()
    };
    this.props.postSmurf(newSmurf);
    this.setState(initialState);
  };

  render() {
    return (
      <div>
        <h1>Enter A New Smurf!</h1>
        <form onSubmit={this.postNewSmurf}>
          <label htmlFor='name'>
            Name:
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChanges}
            />
          </label>
          <label htmlFor='age'>
            Age:
            <input
              type='number'
              name='age'
              value={this.state.age}
              onChange={this.handleChanges}
            />
          </label>
          <label htmlFor='height'>
            Height:
            <input
              type='text'
              name='height'
              value={this.state.height}
              onChange={this.handleChanges}
            />
          </label>
          <button className="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { postSmurf })(Form);
