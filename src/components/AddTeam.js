import React, { Component } from "react";

class AddTeam extends Component {
  teamInput = React.createRef();
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTeam(this.teamInput.current.value);
    e.currentTarget.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.teamInput} placeholder="Enter Team name" />
        <input type="submit" value="Add Team" />
      </form>
    );
  }
}

export default AddTeam;
