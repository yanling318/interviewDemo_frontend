import {appConstants} from "../constants/constants";
import {AxiosResponse} from "axios";


export const barReducer = (state:any | null= null,action:barReducerAction)=>{
    //console.log(action.payload?.data);
    switch (action.type) {
        case appConstants.GET_BAR:
            return action.payload;
        default:
            return state;
    }
};

interface barReducerAction {
    type:string;
    payload:AxiosResponse<any>
}