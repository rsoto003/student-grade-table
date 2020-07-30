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

  cancelClick = () => {
    this.setState({ 
      name: '',
      grade: '',
      course: ''
    });
  }

  deleteStudent = id => {
    console.log('student id to be deleted: ', id);
    this.setState(prevState => {
      const updatedStudentsList = prevState.students.filter(student => student.id !== id);
      return {
        students: updatedStudentsList
      }
    });
  }



  render(){
    return (
      <div className="container text-white lead">
        <Header/>
        <AddForm handleChange={this.handleChange} studentData={this.state} handleSubmit={this.handleSubmit} cancelClick={this.cancelClick}/>
        <StudentContainer students={this.state.students} deleteStudent={this.deleteStudent}/>
      </div>
    );
  }
}

export default App;
