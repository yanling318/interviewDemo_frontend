import React, {useEffect} from "react";
import {appConstants} from "../constants/constants";
import {useDispatch, useSelector} from "react-redux";
import { RouteComponentProps } from "react-router-dom";

export const withGuard =(OldComponent:any)=>{
    const HOCComponent =(props:RouteComponentProps)=>{

        //const user = useSelector(({user}:ReduxState)=>user)
        const dispatch = useDispatch();
        const auth = useSelector((state:any) => state.check);
        //console.log(auth?.user);
        const role = localStorage.getItem('role');
        useEffect(()=>{
           // console.log('withguard', user);
           // dispatch(checkLogin());
            (role!==undefined || role!==null)&& props.history.push(appConstants.loginRoute);
        },[]);

        return(
            role? <OldComponent{...props}/>: <h4>Navigating....</h4>
        );
    }

    return HOCComponent;
};


