import React from "react";
import "./TimeScreen.css";

const TimerScreen = () => {
  return (
    <div className="timer">
      <ul>
        <li>Hours</li>
        <li>Minutes</li>
        <li>Seconds</li>
      </ul>
      <div className="bottomBorder"></div>
    </div>
  );
};

export default TimerScreen;
