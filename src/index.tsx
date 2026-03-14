import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducer/rootReducer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {appConstants} from "./constants/constants";
import reduxPromise from 'redux-promise';
import {NewInterview} from "./component/NewInterview";
import Login from "./component/Login";
import {Logout} from "./component/Logout";
import 'bootstrap/dist/css/bootstrap.min.css';
import {EditTable} from "./component/PageTable";
import Head from "./component/Head";
import {Chart} from "./component/Chart";
import {withGuard} from "./component/withGuard";


const root = document.getElementById('root');
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <Head/>
            <App>
                <Switch>
                    <Route path={appConstants.newInterviewRoute} component={NewInterview}/>
                    <Route path={appConstants.loginRoute} component={Login}/>
                    <Route path={appConstants.logoutRoute} component={Logout}/>
                    <Route path={'/table'} component={EditTable}/>
                    <Route path={appConstants.chartRoute} component={Chart}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    ,root
);

reportWebVitals();
