import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../action/authAction";


export const Register=()=>{

    const dispatch = useDispatch();
    const pass =useSelector((state:any)=> state?.user);
    // const respond = useSelector((state:any) => state?.user);
    const [flag,setFlag]= useState('false');
    return(
        <div>
            <h1>SignUp</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={values => {
                    //console.log(values);
                    dispatch(register(values));
                    //props.history.push(appConstants.loginRoute);
                    console.log(pass);
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <label>username</label>
                        <Field name="username"/>

                        {touched.username && errors.username && <div>{errors.username}</div>}<br/>
                        <label>password</label>
                        <Field name="password" type = "password"/>

                        {touched.password && errors.password && <div>{errors.password}</div>}<br/>
                        <button type="submit" className='btn btn-primary' data-toggle="modal">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}