import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="inner-app">
        <Home/>
        <Footer/>
      </div>
     
    </div>
  );
}

export default App;
