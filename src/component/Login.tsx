import React, {SyntheticEvent, useEffect, useState} from "react";
import {login} from "../action/authAction";
import {useDispatch, useSelector} from "react-redux";
import {RouteComponentProps} from "react-router-dom";
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Login = (props: RouteComponentProps) => {
    //返回一个array state the method of state
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const dispatch = useDispatch();

    const auth = useSelector((state:any) => state.auth);
    //console.log(auth?.user?.role?.type);
    localStorage.setItem('role',auth?.user?.role?.type);
    const handleFormControl = (event: SyntheticEvent) => {
        const inputValue = event.target as HTMLInputElement;
        const userCopy = {
            ...user,
            [inputValue.name]: inputValue.value
        };
        setUser(userCopy);
    };
    const [flag,setFlag] = useState();

    useEffect(()=>{
        if(auth?.success === false){
            //alert("please enter correct username or password");
        }else if(auth?.success === true) {
            console.log(auth?.success)
            props.history.push('/table');
        }
    },[auth]);

    const submitHandler = (event: SyntheticEvent) => {
        dispatch(login(user));
        // event.preventDefault();
    }

    return (
        <div>
            <h2>Login</h2>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                }}
                onFinish={submitHandler}
            >
                <Form.Item
                    name="username"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input
                        name="username" value={user.username} onChange={handleFormControl}
                        style={{width:"20%"}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        name="password" value={user.password} onChange={handleFormControl}
                        style={{width:"20%"}}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;