import React from 'react';
import {BsFillChatSquareQuoteFill, BsFolderFill} from "react-icons/bs"
import { IoIosClose, IoIosStats } from 'react-icons/io';
import {AiFillHome, AiFillSetting} from 'react-icons/ai'
import  {RiLoginCircleFill} from 'react-icons/ri'

function SideBar(props) {

    const classN = props.side? '': 'd-none d-md-flex'


    return (
        <div className={"col-7 col-md-2 d-flex flex-column align-items-between justify-content-between bg-white border-end "+classN} style={{
            height: '100vh',
            padding: '30px 0px 50px 30px',
            position: 'fixed',
            zIndex: 99,
            transition: '3'
        }}>
            <span className="fw-bolder fs-4 d-flex justify-content-between align-items-center">
                .toDo
                <span className="d-md-none btn" onClick={props.close}>
                    <IoIosClose size={24} style={{
                        marginRight: 10
                    }}/>
                </span>
            </span>
            
            <div className="col-12">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active d-flex align-items-center link-dark small text-muted" href="#">
                        <AiFillHome style={{
                            marginRight: 5
                        }}/> 
                        Overview
                    </a>
                </li>
                <li className="nav-item border-2 border-end border-success">
                    <a className="nav-link active d-flex align-items-center link-dark small" href="#">
                            <BsFolderFill style={{
                                marginRight: 5
                            }}/> 
                            Tasks
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active d-flex align-items-center link-dark small text-muted" href="#">
                        <IoIosStats style={{
                            marginRight: 5
                        }}/> 
                        Productivity
                    </a>
                </li>
                <li className="nav-item d-flex justify-content-between align-items-center text-muted" style={{
                    padding: '0px 20px 0px 0px'
                }}>
                    <a className="nav-link active d-flex align-items-center link-dark small text-muted" href="#">
                        <BsFillChatSquareQuoteFill style={{
                            marginRight: 5
                        }}/> 
                        Chat
                    </a>
                    <span className="badge bg-warning">
                        2
                    </span>
                </li>
            </ul>
            </div>
            <div className="col-12">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active d-flex align-items-center link-dark small text-muted" href="#">
                        <AiFillSetting style={{
                            marginRight: 5
                        }}/> 
                        Setting
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active d-flex align-items-center link-dark small text-muted" href="#">
                            <RiLoginCircleFill style={{
                                marginRight: 5
                            }}/> 
                            Account
                    </a>
                </li>
                
            </ul>
            </div>
        </div>
    );
}

export default SideBar;