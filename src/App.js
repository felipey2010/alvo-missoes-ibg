import { useState } from "react";
import "./App.css";
import logo from "./images/logo.png";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Progress from "./components/progress";
import { Animated } from "./components/animation/shakingAnimation";

function App() {
  const [progressVisible, setProgressVisible] = useState(false);
  const [percentage, setPercentage] = useState(25);

  function setProgress() {
    setProgressVisible(!progressVisible);
  }

  return (
    <div className="App">
      <div className="Container">
        <Slide top>
          <div className="App-logo">
            <img src={logo} alt="logo" className="logo" />
          </div>
        </Slide>
        <Fade left>
          <Animated>
            <div className="App-button">
              <button onClick={() => setProgress()}>Mostrar o Alvômetro</button>
            </div>
          </Animated>
        </Fade>
        {progressVisible && (
          <Fade bottom>
            <div className="progressBar">
              <h1>ALVO ALCANÇADO</h1>
              <Progress percentage={percentage} />
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
}

export default App;
