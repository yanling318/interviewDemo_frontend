import {appConstants} from "../constants/constants";
import {AxiosResponse} from "axios";

export const chartReducer = (state:any | null= null,action:chartReducerAction)=>{
    //console.log(action.payload?.data);
    switch (action.type) {
        case appConstants.GET_PIE:
            return action.payload;
        default:
            return state;
    }
};

interface chartReducerAction {
    type:string;
    payload:AxiosResponse<any>
}