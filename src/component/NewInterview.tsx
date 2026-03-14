import {Field, Form, Formik} from "formik";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {SyntheticEvent, useEffect, useState} from "react";
import {addInterview} from "../action/interviewAction";
import {Interview} from "../constants/Interview";
import {RouteComponentProps} from "react-router";
import {appConstants} from "../constants/constants";

export const NewInterview = (props: RouteComponentProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
    }, []);
    const auth = useSelector((state:any) => state.auth);
    const [interview, setInterview] = useState({scheduler:auth?.user.username});
    //console.log(auth);
    const changeHandler = (event: SyntheticEvent) => {
      const value = event.target as HTMLInputElement;
        event.preventDefault();
        if(value.name ==='time'){
            const time = (new Date(value.value)).toISOString().slice(0,10)+" "+
            (new Date(value.value)).toISOString().slice(11,16);
            console.log(time);
            const interviewCopy ={
                ...interview,
                [value.name]:time
            };
            setInterview(interviewCopy);

        }else {
        const interviewCopy ={
            ...interview,
                [value.name]:value.value
        }
            setInterview(interviewCopy);
        }
        //console.log(interview);
    }
    const submitHandler=(event: SyntheticEvent)=>{
            event.preventDefault();
            dispatch(addInterview(interview));
            //props.history.push('/table');
            //localStorage.setItem('flag','true')
    }
    const role =localStorage.getItem('role');
    return (
        <div>
            {
                (role ==='HR'|| role ==='Trainer')?
                    <div>
                        <h2>Add New Interview</h2>
                <form onChange={changeHandler}>
                    <label>Time </label>
                    <input name='time' type='datetime-local' onChange={changeHandler}/><br/>
                    <label>Candidate</label>
                    <input name='candidate' onChange={changeHandler}/><br/>
                    <label>Scheduler</label>
                    <input name='scheduler' value={auth?.user.username} onChange={changeHandler}/><br/>
                    <label>Phone </label>
                    <input name='phone' onChange={changeHandler}/><br/>
                    <label>Comments </label>
                    <input name='comments' onChange={changeHandler}/><br/>
                    <button className='btn btn-outline-dark' onClick={submitHandler}>Add</button>
                    {/*<button>Upload</button>*/}
                    {/*<button>Cancel</button>*/}
                </form> </div>:<h5>Please login for make new interview</h5>

            }

                {/*<Formik*/}
                {/*    initialValues={*/}
                {/*            {} as Interview*/}
                {/*     }*/}
                {/*    onSubmit={(values:Interview) =>{*/}
                {/*        dispatch(addInterview(values))*/}
                {/*    }*/}
                {/*    }*/}
                {/*>*/}
                {/*    <Form>*/}
                {/*        /!*<label>Time</label>*!/*/}
                {/*        /!*<Field name='time' type='datetime-local'/><br/>*!/*/}
                {/*        <label>Candidate</label>*/}
                {/*        <Field name='candidate'/><br/>*/}
                {/*        <label>Scheduler</label>*/}
                {/*        <Field name='scheduler'/><br/>*/}
                {/*        <label>Phone</label>*/}
                {/*        <Field name='phone'/><br/>*/}
                {/*        <label>Comments </label>*/}
                {/*        <Field name='comments'/><br/>*/}
                {/*        <button type="submit">Add</button>*/}
                {/*    </Form>*/}
                {/*</Formik>*/}
                {/*<button>Upload</button>*/}
                {/*<button>Cancel</button>*/}
        </div>
    )
}