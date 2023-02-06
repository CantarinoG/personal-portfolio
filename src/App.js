import { useState, useEffect } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ptText, enText } from "./utils/lang";
import handleAnimations from "./utils/handleAnimations";

function App() {

  const [text, setText] = useState(ptText);

  useEffect(() => { //ComponentDidMount
    handleAnimations();
  }, []);

  const setTextPt = () => {
    setText(ptText);
  }

  const setTextEn = () => {
    setText(enText);
  }

  return <div className="app">
    <Header text={text}/>
    <Home text={text} setTextPt={setTextPt} setTextEn={setTextEn}/>
    <About text={text}/>
    <Projects text={text}/>
    <Contact text={text}/>
    <Footer text={text}/>
  </div>
}

export default App;
