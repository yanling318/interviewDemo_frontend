import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {logout} from "../action/authAction";
import React from "react";

export const Logout=()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(logout());
    },[]);

    return(
        <div>you are logout</div>
    )
}