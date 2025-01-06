import React from "react";
import Background from "./Components/Background";
import NavBar from "./Components/NavBar";
import TimerScreen from "./Components/TimerScreen";

const App = () => {
  return (
    <Background>
      <NavBar />
      <TimerScreen />

    </Background>
  );
};

export default App;
