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

      {/* Timer Display */}
      <div className="timerDisplay">
        <div className="timerPrevious">00:19:59</div>
        <div className="timerCurrent">01:20:00</div>
        <div className="timerNext">01:20:01</div>
      </div>

      {/* Button */}
 
 <div class='btnDiv'>  <button class='startBtn'>
        Start
      </button></div>
     
    </div>
  );
};

export default TimerScreen;
