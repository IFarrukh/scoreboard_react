import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import AddTeam from "./components/AddTeam";

class App extends Component {
  state = {
    players: [
      {
        name: "Real Madrid",
        score: 0,
        id: 1
      },
      {
        name: "Barcelona",
        score: 0,
        id: 2
      },
      {
        name: "Bayern",
        score: 0,
        id: 3
      },
      {
        name: "Liverpool",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      return {
        score: (prevState.players[index].score += delta)
      };
    });
    console.log(index);
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
    console.log(id);
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Game Scoreboard" players={this.state.players} />
        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            score={player.score}
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            index={index}
            remove={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        ))}
        <AddTeam />
      </div>
    );
  }
}

export default App;
