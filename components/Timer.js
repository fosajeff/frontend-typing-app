import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const { seconds, onSetSeconds, minutes, onSetMinutes, onGameOver } = props;

  useEffect(() => {
    let timeInterval = setInterval(() => {
      if (seconds > 0) {
        onSetSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          onGameOver();
          clearInterval(timeInterval);
        } else {
          onSetMinutes(minutes - 1);
          onSetSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  });
  return (
    <div className="text-end">
      <h3>
        Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h3>
    </div>
  );
};

export default Timer;
