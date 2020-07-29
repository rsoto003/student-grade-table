import React from 'react';
import TableData from './TableData';

const StudentContainer = ({ students }) => {
    const studentData = students.map(student => <TableData student={student} key={student.id} />);
    return (
        <div className="col-md-8">
            <table className="table table-dark float-left table-hover">
                <thead>
                    <tr>
                        <th scope="col">Student Name</th>
                        <th scope="col">Student Course</th>
                        <th scope="col">Student Grade</th>
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