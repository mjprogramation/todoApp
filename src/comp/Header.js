import React from 'react';
import {BiHelpCircle, BiSearch} from 'react-icons/bi'
import {IoIosMenu, IoMdArrowDropdown, IoMdNotificationsOutline} from 'react-icons/io'


function Header({open}) {
    return (
        <div className="col-12 d-flex justify-content-between align-items-center" style={{
            height: '70px',
            padding: "0px 20px"
        }}>
            <span className="d-flex align-items-center  ">
                <span className="d-md-none btn" onClick={open}>
                    <IoIosMenu/>
                </span>
            <div className="input-group">
                <span className="input-group-text bg-transparent border-0" id="basic-addon1">
                    <BiSearch/>
                </span>
                <input type="text" className="form-control border-0 bg-transparent" placeholder="Search"/>
            </div>
            </span>
            <ul className="nav align-items-center">
                <li className="nav-item d-none d-md-flex">
                    <span className="btn">
                         <BiHelpCircle size={24}/>
                    </span>
                    <span className="btn">
                        <IoMdNotificationsOutline size={24}/>
                    </span>
                </li>
                    
                <li className="nav-item d-none d-md-flex">
                    <span className='btn'>
                        <small className="text-muted">
                            Anass Boutaline
                        </small>
                        <IoMdArrowDropdown/>
                    </span>
                </li>
                <li className="nav-item">
                    <img src="assets/batman.png" style={{
                        height: "40px",
                        width : '40px',
                        borderRadius: '50%'
                    }}/>
                </li>
            </ul>
        </div>
    );
}

export default Header;