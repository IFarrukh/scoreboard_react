import React from "react";

const Stats = props => {
  const totalTeam = props.teams.length;
  const totalScore = props.teams.reduce((total, team) => {
    return total + team.score;
  }, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalTeam}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;
