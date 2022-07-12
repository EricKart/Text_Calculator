import "./App.css"
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert"
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";


export default function App() {
  const [mode, setMode] = useState("light");
  const [modetext, setmodetext] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const togglemode = () =>{
    if(mode==="light")
    {
      setMode("dark");
      setmodetext("Disable Dark Mode");
      document.body.style.backgroundColor = "#212e42";
      showAlert("Dark mode has been activated!", "success")
    }
    else{
      setMode("light");
      setmodetext("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been activated!", "success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TEXT PLAYER" mode={mode} aboutText="About Us" togglemode={togglemode} modetext={modetext}/>
      <Alert alert={alert}/>
      <div className="container mb-3">
        <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert}/>}/>
        
          {/* <About/> */}
        
        </Routes>
      </div>
    </Router>

    </>
  
  );
}

