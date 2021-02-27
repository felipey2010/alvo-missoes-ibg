import { useState } from "react";
import "./App.css";
import logo from "./images/logo.png";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Progress from "./components/progress";

function App() {
  const [progressVisible, setProgressVisible] = useState(false);
  const [percentage, setPercentage] = useState(50);

  function setProgress() {
    setProgressVisible(!progressVisible);
    console.log("Visibility: " + progressVisible);
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
          <div className="App-button">
            <button onClick={() => setProgress()}>Mostrar o Alvômetro</button>
          </div>
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
