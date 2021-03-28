import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

function Crumb(props) {
    return (
        <div className="col-12 d-flex justify-content-between p-3" style={{
            padding: "0px 20px"
        }}>
            <span className="">
                Projects
            </span>
            <span className="small">
                This week 
                <IoMdArrowDropdown/>
            </span>
        </div>
    );
}

export default Crumb;