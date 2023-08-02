import './App.css';
import pic_1 from "./assets/pic-1.jpg";
import pic_2 from "./assets/pic-2.jpg";
import pic_3 from "./assets/pic-3.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

const navbarLinks = [
  {url: "hero", title: "Home"},
  {url: "slider1", title: "Feature1"},
  {url: "slider2", title: "Feature2"},
]

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <div id="hero"><Hero imageSrc={pic_1} /></div>
      <div id="slider1"><Slider imageSrc={pic_2} title={"Be an explorer!"} subtitle={"Travel around the World just for fun."}/></div>
      <div id="slider2"><Slider imageSrc={pic_3} title={"Memories for a lifetime"} subtitle={"Your dream vocation is only a few clicks away."} flipped={true} /></div>
    </div>
  );
}

export default App;
