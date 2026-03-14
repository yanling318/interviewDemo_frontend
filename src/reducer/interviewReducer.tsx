import {appConstants} from "../constants/constants";
import {AxiosResponse} from "axios";

export const interviewReducer = (state:any| null = null,action:interviewReducerAction)=>{
    //console.log('interview reducer',action.payload?.data);
    switch (action.type) {
        case appConstants.GET_INTERVIEW:
            return action.payload?.data;
        case appConstants.EDIT_INTERVIEW:
            return state;
        default:
            return state;
    }
};

interface interviewReducerAction {
    type:string;
    payload:AxiosResponse<any>
}