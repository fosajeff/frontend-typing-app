import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const { seconds, onSetSeconds, minutes, onSetMinutes } = props;

  useEffect(() => {
    let timeInterval = setInterval(() => {
      if (seconds > 0) {
        onSetSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
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
    <h1>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </h1>
  );
};

export default Timer;
