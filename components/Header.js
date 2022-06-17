import React from "react";
import Timer from "./Timer";

const Header = ({ seconds, onSetSeconds, minutes, onSetMinutes, onGameOver }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <h2>Frontend Typing</h2>

        <div>
          <ul className="me-auto"></ul>

          <Timer
          onGameOver={onGameOver}
            seconds={seconds}
            onSetSeconds={onSetSeconds}
            minutes={minutes}
            onSetMinutes={onSetMinutes}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
