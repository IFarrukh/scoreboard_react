import React, { Component } from "react";

class AddTeam extends Component {
  state = {
    value: ""
  };
  handleValueChange = e => {
    this.setState({
      value: e.target.value
    });
    console.log(e.target.value);
  };
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter Team name"
        />
        <input type="submit" value="Add Team" />
      </form>
    );
  }
}

export default AddTeam;
