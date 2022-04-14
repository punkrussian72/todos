import React from 'react';
import './App.css';
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
    return (
        <div className="app">
          <div className="wrapper">
            <Header />
            <Todos />
          </div>
        </div>
    );
}

export default App;
