import axios from "axios";
import {appConstants} from "../constants/constants";
import {Interview} from "../constants/Interview";

export const getInterview =() =>{
    const getPromise = axios.get("https://interviewdemo-backend.onrender.com/interviews");
    return {
        type: appConstants.GET_INTERVIEW,
        payload: getPromise
    }
};
export const addInterview =(interview:any) =>{
    console.log("add interview",interview)
    const addPromise = axios.post("https://interviewdemo-backend.onrender.com/interviews",interview);
    return {
        type: appConstants.ADD_INTERVIEW,
        payload: addPromise
    }
};
export const editInterview =(interview:Interview) =>{
    console.log('edit');
    console.log(interview);
    const editPromise = axios.post("https://interviewdemo-backend.onrender.com/interviews/edit",interview);
    return {
        type: appConstants.EDIT_INTERVIEW,
        payload: editPromise
    }
};
export const uploadResume =(id:number, dataArray: FormData) =>{
    console.log(dataArray);
   // console.log(interview);
    const uploadPromise = axios.post(`https://interviewdemo-backend.onrender.com/resume/upload/${id}`,dataArray);
    return {
        type: appConstants.EDIT_INTERVIEW,
        payload: uploadPromise
    }
};
export const uploadData =(dataArray: FormData) =>{
    //console.log(dataArray);
    // console.log(interview);
    const uploadPromise = axios.post('https://interviewdemo-backend.onrender.com/hr/upload/',dataArray);
    return {
        type: appConstants.EDIT_INTERVIEW,
        payload: uploadPromise
    }
};



