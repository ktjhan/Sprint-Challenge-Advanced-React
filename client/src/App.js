import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles.scss";
import Navbar from "./components/Navbar";
import DataFetch from "./components/DataFetch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DataFetch />
    </div>
  );
}

export default App;
