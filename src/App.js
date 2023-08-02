import logo from './logo.svg';
import './App.css';
import pic_1 from "./assets/pic-1.jpg";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="hero"><Hero imageSrc={pic_1} /></div>
    </div>
  );
}

export default App;
