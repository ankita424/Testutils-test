import React from 'react';

import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');  //whether dark mode is Enabled or not
  const [alert,setAlert] = useState(null);
 

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark') 
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success")
      document.title = 'Textutils - Dark mode'
      // setInterval(() => {
      //   document.title = 'Textutils is amazing';
      // }, 2000);                                                // {title chamkane ke liye}
      // setInterval(() => {
      //   document.title = 'Downlode the Textutils now';
      // }, 1500);
    } 
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      document.title = 'Textutils - Light mode'          //{ title change karne ke liye}
     
    }
  }

  return (
    <> 
        {/* <Navbar title="Textutils" aboutText="About Textutils"/> */}
    <Router>
        <Navbar title="Textutils" mode ={mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
       <div className="container my-3" >
      <Routes>
        <Route  path="/about" element={ <About />}>
          
        </Route>
        <Route  path="/" element={<TextForm heading="Enter the text to analyze" showAlert ={showAlert} mode ={mode}/>}>
           
        </Route>
        </Routes>
        
</div>
    </Router>
    </>
  );
}

export default App;
