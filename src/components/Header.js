import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";
const Header = props => {
  return (
    <header>
      <Stats teams={props.teams} />
      <h1>{props.title}</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
