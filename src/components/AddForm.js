import React from 'react';
import { PersonIcon, BookIcon, MortarBoardIcon } from '@primer/octicons-react';

const AddForm = props => {
    return (
        <div className="col-md-4 float-right">
            <h4><strong>Add Student</strong></h4>
            <div className="col-xs-12 col-md-12 input-group form-group mt-3">

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><PersonIcon/></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Student Name" aria-label="Student Name" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><BookIcon /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Student Course" aria-label="Student Course" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><MortarBoardIcon /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Student Grade" aria-label="Student Grade" aria-describedby="basic-addon1"/>
                </div>
            </div>
        </div>
    );
}

export default AddForm;