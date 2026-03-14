import {appConstants} from "../constants/constants";
import {AxiosResponse} from "axios";


export const addReducer = (state:any = null,action:addReducerAction)=>{
    console.log(action.payload?.data);
    switch (action.type) {
        case appConstants.ADD_INTERVIEW:
            return action.payload?.data;
        default:
            return state;
    }
};

interface addReducerAction {
    type:string;
    payload:AxiosResponse<any>
}