import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render(){
    return (
      <div className="container text-white lead">
        <Header/>
      </div>
    );
  }
}

export default App;
