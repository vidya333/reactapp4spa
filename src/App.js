import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){
  return(
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
