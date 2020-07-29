import React from 'react';
import { PersonIcon, BookIcon, MortarBoardIcon } from '@primer/octicons-react';

const AddForm = ({ handleChange, studentData, handleSubmit, cancelClick }) => {
    return (
        <div className="col-md-4 float-right">
            <h4><strong>Add Student</strong></h4>
            <div className="col-xs-12 col-md-12 input-group form-group mt-3">
                { /** student name */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><PersonIcon/></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Student Name" aria-label="Student Name" aria-describedby="basic-addon1" name="name" onChange={handleChange} value={studentData.name}/>
                </div>
                { /** student course */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><BookIcon /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Student Course" aria-label="Student Course" aria-describedby="basic-addon1" name="course" onChange={handleChange} value={studentData.course}/>
                </div>
                {/** student grade */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><MortarBoardIcon /></span>
                    </div>
                    <input type="number" className="form-control" placeholder="Student Grade" aria-label="Student Grade" aria-describedby="basic-addon1" name="grade" onChange={handleChange} value={studentData.grade}/>
                </div>


                <button type="submit" className="btn btn-success mr-2" onClick={handleSubmit}>Add</button>
                <button type="button" className="btn btn-danger" onClick={cancelClick}>Cancel</button>
            </div>
        </div>
    );
}

export default AddForm;