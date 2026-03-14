import axios from "axios";
import qs from 'qs';
import {appConstants} from "../constants/constants";

export const login =(user :{username:string,password:string}) =>{
    //console.log()
    const loginPromise = axios.post("http://localhost:8080/login",
        qs.stringify(user),
        {withCredentials:true}
    );
    return {
        type: appConstants.LOGIN,
        payload: loginPromise
    }
};
export const logout =() =>{
    //console.log()
    localStorage.clear();
    const logoutPromise = axios.get("http://localhost:8080/logout",
        {withCredentials:true}
    );
    return {
        type: appConstants.LOGOUT,
        payload: logoutPromise
    }
};

export const register =(user:any) =>{
    //console.log()
    localStorage.clear();
    const logoutPromise = axios.get("http://localhost:8080/register",user
    );
    return {
        type: appConstants.LOGOUT,
        payload: logoutPromise
    }
};