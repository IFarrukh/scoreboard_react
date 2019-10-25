import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Team from "./components/Team";
import AddTeam from "./components/AddTeam";

class App extends Component {
  state = {
    teams: [
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
  //playerIdCounter
  prevTeamId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      return {
        score: (prevState.teams[index].score += delta)
      };
    });
    console.log(index);
  };

  handleRemoveTeam = id => {
    this.setState(prevState => {
      return {
        teams: prevState.teams.filter(p => p.id !== id)
      };
    });
    console.log(id);
  };
  handleAddTeam = name => {
    this.setState(prevState => {
      return {
        teams: [
          ...prevState.teams,
          {
            name: name,
            score: 0,
            id: (this.prevTeamId += 1)
          }
        ]
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Game Scoreboard" teams={this.state.teams} />
        {/* Players list */}
        {this.state.teams.map((team, index) => (
          <Team
            score={team.score}
            name={team.name}
            id={team.id}
            key={team.id.toString()}
            index={index}
            remove={this.handleRemoveTeam}
            changeScore={this.handleScoreChange}
          />
        ))}
        <AddTeam addTeam={this.handleAddTeam} />
      </div>
    );
  }
}

export default App;
