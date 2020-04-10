import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";
const Header = ({ teams, title }) => {
  return (
    <header>
      <Stats teams={teams} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

export default Header;
