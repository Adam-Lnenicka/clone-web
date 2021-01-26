import React from 'react'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="inner-app">


        <Router>
        <Switch>
            <Route exact path="/" component={Home} />

        </Switch>
    </Router>
        <Footer/>
      </div>
     
    </div>
  );
}

export default App;
