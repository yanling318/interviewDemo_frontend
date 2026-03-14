import {appConstants} from "../constants/constants";
import {AxiosResponse} from "axios";

export const authReducer = (state:any = null,action:authReducerAction)=>{
console.log(action.payload?.data);
    switch (action.type) {
        case appConstants.LOGIN:
            return action.payload?.data;
        case appConstants.LOGOUT:
            return null;
        default:
            return state;
    }
};

interface authReducerAction {
    type:string;
    payload:AxiosResponse<any>
}