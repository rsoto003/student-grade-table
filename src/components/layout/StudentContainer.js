import React from 'react';
import TableData from './TableData';

const StudentContainer = ({ students, deleteStudent }) => {
    const studentData = students.map(student => <TableData student={student} key={student.id} deleteStudent={deleteStudent.bind(this, student.id)}/>);
    return (
        <div className="col-md-8">
            <table className="table table-dark float-left table-hover border-0">
                <thead>
                    <tr>
                        <th scope="col">Student Name</th>
                        <th scope="col">Student Course</th>
                        <th scope="col">Student Grade</th>
                        <th scope="col"> </th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    {studentData}
                </tbody>
            </table>

        </div>
    )
}

export default StudentContainer;