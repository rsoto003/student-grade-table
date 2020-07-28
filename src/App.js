import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm';

class App extends Component {
  state = {
    name: '',
    course: '',
    grade: '',
    students: []
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name] : value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, course, grade } = this.state;
    const studentData = {
      name, course, grade
    }
    this.setState({ 
      students: [...this.state.students, studentData],
      name: '',
      course: '',
      grade: ''
    });
  }

  cancelClick =() => {
    this.setState({ 
      name: '',
      grade: '',
      course: ''
    })
  }
  render(){
    return (
      <div className="container text-white lead">
        <Header/>
        <AddForm handleChange={this.handleChange} studentData={this.state} handleSubmit={this.handleSubmit} cancelClick={this.cancelClick}/>
      </div>
    );
  }
}

export default App;
