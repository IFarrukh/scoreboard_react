import React from "react";
import Counter from "./Counter";

const Team = props => {
  return (
    <div className="team">
      <span className="team-name">
        <button className="remove-team" onClick={() => props.remove(props.id)}>
          ✖
        </button>
        {props.name}
      </span>

      <Counter
        score={props.score}
        index={props.index}
        changeScore={props.changeScore}
      />
    </div>
  );
};

export default Team;
