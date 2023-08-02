import logo from './logo.svg';
import './App.css';
import pic_1 from "./assets/pic-1.jpg";
import pic_2 from "./assets/pic-2.jpg";
import pic_3 from "./assets/pic-3.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";

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
      <div id="slider1"><Slider imageSrc={pic_2} title={"Be an explorer!"} subtitle={"Travel around the World just for fun."}/></div>
      <div id="slider2"><Slider imageSrc={pic_3} title={"Memories for a lifetime"} subtitle={"Your dream vocation is only a few clicks away."} flipped={true} /></div>
    </div>
  );
}

export default App;
