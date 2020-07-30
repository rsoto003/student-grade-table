import React from 'react';

const TableData = ({student: {name, course, grade}, deleteStudent }) => {
    return (
        <tr>
            <th scope="row">{name}</th>
            <td>{course}</td>
            <td>{grade}</td>
            <td><button type="button" className="btn btn-sm btn-success">Edit</button></td>
            <td><button type="button" className="btn btn-sm btn-danger" onClick={deleteStudent}>Delete</button></td>
        </tr>
    );
}

export default TableData;