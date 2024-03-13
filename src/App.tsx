import React from 'react';
import './App.css';
import Header from "./components/Header";
import Recommended from "./components/Recommended";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
