import axios from "axios";
import {appConstants} from "../constants/constants";


export const getPie =() =>{
    const getPromise = axios.get("https://interviewdemo-backend.onrender.com/charts/pie");
    return {
        type: appConstants.GET_PIE,
        payload: getPromise
    }
};

export const getPiee =() =>{
    const getPromise = axios.get("https://interviewdemo-backend.onrender.com/charts/piee");
    return {
        type: "",
        payload: getPromise
    }
};

export const getBar =() =>{
    const getPromise = axios.get("https://interviewdemo-backend.onrender.com/charts/bar");
    return {
        type: appConstants.GET_BAR,
        payload: getPromise
    }
};
