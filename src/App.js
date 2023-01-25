import './App.css';
import Navbar from './/component/Navbar'
import TextForm from './component/TextForm';
import About from './component/About';
import News from './component/News';
import Home from './component/Home';
import Footer from './component/Footer';
import React, { useState } from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const t1 = 'WTP'

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
    }
  }

  return (
    <>
    
    <Router> 
      <Navbar title="WTP Project" toggleMode={toggleMode} mode={mode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About title={t1} mode={mode}/>
          </Route>
          <Route exact path="/news">
            <News title={t1} mode={mode}/>
          </Route>
          <Route exact path="/">
            <Home title={t1} mode={mode}/>
          </Route>
          <Route exact path="/words">
            <TextForm title={t1} showAlert={showAlert} heading="TextApp - Do what you want to do with text in one touch." mode={mode}/>
          </Route>
      </Switch>
      </div>
      <Footer  mode={mode}/>
    </Router>
    </>
  );
}

export default App;
