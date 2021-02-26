import "./App.css";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="App-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="App-button">
          <button>Acompanhar o Alvômetro</button>
        </div>
      </div>
    </div>
  );
}

export default App;
