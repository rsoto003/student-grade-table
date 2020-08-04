 import React from 'react';

 const Header = ({grade}) => {
     return (
        <div className="pb-2 mt-4 mb-5 border-bottom">
            { /** only visible when not on mobile */}
            <h2 className="d-none d-md-block">Student Grade Table
     <small className="float-right"> Grade Average: <span className="text-warning">{grade}</span></small>
            </h2>
            { /** only visible when user is on mobile */}
            <h4 className="d-sm-none">Student Grade Table
                <small className="float-right"> Grade Average: <span className="text-danger">0</span></small>
            </h4>
        </div>
     );
 }

 export default Header;