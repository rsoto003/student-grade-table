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
    totalGrade: 0,
    id: '',
    idEditing: false,
    students: [],
    overallGrade: 0,
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name] : value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let { name, course, grade, id, students } = this.state;
    let total = 0;
    total+= parseInt(grade);
    id = students.length + 1;
    const studentData = {
      name, course, grade, id
    }
    
    this.setState(prevState => ({ 
      students: [...students, studentData],
      name: '',
      course: '',
      grade: '', 
      id: '',
      totalGrade: prevState.totalGrade + total,
    }));

    setTimeout( 
      () => this.calculateGrades(), 
      100
    );
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
    setTimeout( 
      () => this.calculateGrades(), 
      100
    );
  }

  editChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  editStudent = id => {
    console.log('student data to be edited: ', id);
  }

  editSubmit = event => {
    event.preventDefault();

  }

  calculateGrades = () => {
    const { overallGrade, students }= this.state;
    console.log(students.length);
    let totalGrade = 0;
    let gradeAverage = 0;
    for(let i = 0; i < students.length; i++ ){
      totalGrade+= parseInt(students[i].grade);
    }
    gradeAverage = parseFloat(totalGrade / students.length).toFixed(2);
    this.setState({ 
      overallGrade: gradeAverage
    });
    return overallGrade;
  }

  render(){
    return (
      <div className="container text-white lead">
        <Header 
          grade={this.state.overallGrade}
          totalGrade={this.state.totalGrade}
          students={this.state.students}
        />
        <AddForm 
          handleChange={this.handleChange} 
          studentData={this.state} 
          handleSubmit={this.handleSubmit} 
          cancelClick={this.cancelClick}

        />
        <StudentContainer 
          students={this.state.students} 
          deleteStudent={this.deleteStudent}
        />
      </div>
    );
  }
}

export default App;
