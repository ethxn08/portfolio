import React, {useState, useEffect} from "react"
import './App.css';
import Cover from './Components/Cover';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Slider from './Components/Slider';
import Info from "./Components/Info";
import Footer from './Components/Footer';
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  }, [])


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
      {
        loading ? 
        <div className="loading">
          <h1>A second, please. </h1>
          <h3>The page is being configured for you, ...</h3>
        <Spinner color="light" />
        </div>
        : 
        <>
        <Navbar isScrolling={scrollHeight} />
        <Cover />
        <About />
        <Slider />
        <Info />
        <Footer />
        </>
      }
        
    </div>
  );
}

export default App;
