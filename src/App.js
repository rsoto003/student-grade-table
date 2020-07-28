import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm';

class App extends Component {
  render(){
    return (
      <div className="container text-white lead">
        <Header/>
        <AddForm />
      </div>
    );
  }
}

export default App;
