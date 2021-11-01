import React, {useState, useEffect} from "react"
import './App.css';
import Cover from './Components/Cover';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Slider from './Components/Slider';
import Info from "./Components/Info";
import Footer from './Components/Footer';
function App() {

  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeight(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [scrollHeight])
  return (
    <div className="App">
        <Navbar isScrolling={scrollHeight} />
        <Cover />
        <About />
        <Slider />
        <Info />
        <Footer />
    </div>
  );
}

export default App;
