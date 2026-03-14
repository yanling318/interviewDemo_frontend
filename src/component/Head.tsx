import React, {SyntheticEvent, useEffect, useState} from "react";
import {NavLink, RouteComponentProps} from "react-router-dom";
import {appConstants,} from "../constants/constants";
import {useDispatch, useSelector} from "react-redux";
import {UserDetail} from "./UserDetail";

const Head = () => {

    const dispatch = useDispatch();
    const role =localStorage.getItem('role');
    const [flag,setFlag]=useState('false');
    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-black navbar-expand-sm">
                    <span className="navbar-brand">MSI</span>
                    <ul className="nav navbar-nav">
                        {/*<li className="nav-item">*/}
                        {/*    <NavLink className="nav-link" to={appConstants.LOGIN}>Login</NavLink>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <NavLink className="nav-link" to={appConstants.LOGOUT}>Logout</NavLink>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/table'}>Interview</NavLink>
                        </li>
                        {/*{(role==='HR')?*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <NavLink className="nav-link" to={appConstants.chartRoute}>Chart</NavLink>*/}
                        {/*    </li>:null*/}
                        {/*}*/}
                    </ul>
                    <UserDetail/>
                </nav>
            </header>
        </div>
    );

};
export default Head;