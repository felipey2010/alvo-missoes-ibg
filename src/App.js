import "./App.css";
import logo from "./images/logo.png";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

function App() {
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
            <button>Mostrar o Alvômetro</button>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;
