import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import AddForm from './components/layout/AddForm';
import StudentContainer from './components/layout/StudentContainer';

class App extends Component {
  state = {
    name: '',
    course: '',
    grade: '',
    id: '',
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
    let { name, course, grade, id, students } = this.state;
    id = students.length + 1;
    const studentData = {
      name, course, grade, id
    }
    this.setState({ 
      students: [...this.state.students, studentData],
      name: '',
      course: '',
      grade: '', 
      id: ''
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
        <StudentContainer students={this.state.students}/>
      </div>
    );
  }
}

export default App;
