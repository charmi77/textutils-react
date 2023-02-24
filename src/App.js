import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // use for routing but not work in github


function App() {

const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#0a2037';
    showAlert('Dark mode is on','success');
    // setAlert({
    //   msg:'Dark',
    //   type:'success'
    // })  //you can use this without making showAlert function
    document.title = 'TextUtils - Darkmode';
    // setInterval(() => {
    //   document.title = 'TextUtils - lightout';
    // }, 1500);
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert('Light mode is on','success');
    document.title = 'TextUtils - Lightmode';

  }
}

  return (
    <>
    {/* <Router>
    <Navbar title="TextUtils" aboutText="AboutTextutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route exact path="/about"  element={<About />}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>}></Route>
      </Routes>
    </div>
    </Router> use for routing but not work in github*/} 

    <Navbar title="TextUtils" aboutText="AboutTextutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <About /> */}
      <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>
    </div>

    </>
  );
}

export default App;
