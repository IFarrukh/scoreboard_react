import React, { PureComponent } from "react";
import Counter from "./Counter";

class Team extends PureComponent {
  render() {
    const { remove, id, name, score, index, changeScore } = this.props;
    return (
      <div className="team">
        <span className="team-name">
          <button className="remove-team" onClick={() => remove(id)}>
            ✖
          </button>
          {name}
        </span>

        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}

export default Team;
