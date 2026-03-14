import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {interviewReducer} from "./interviewReducer";
import {chartReducer} from "./chartReducer";
import {barReducer} from "./barReducer";
import {addReducer} from "./addReducer";

export const rootReducer=combineReducers({

    auth:authReducer,
    interview:interviewReducer,
    chart:chartReducer,
    bar:barReducer,
    add:addReducer
});