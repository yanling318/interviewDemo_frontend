import React from "react";
import {Button, Dropdown,Menu, Space} from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {appConstants} from "../constants/constants";
import {NavLink} from "react-router-dom";
export const UserDetail =()=>{

    return(
        <div>
            <Space direction="vertical" >

                    <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>

                    </Dropdown.Button>

            </Space>

        </div>
    )
};
const menu = (
    <Menu>
        <Menu.Item key={1}>
            {/*<a target="_blank" rel="noopener noreferrer" href={appConstants.loginRoute}>*/}
            {/*    login*/}
            {/*</a>*/}
            <NavLink className="nav-link" to={appConstants.loginRoute}>login</NavLink>
        </Menu.Item>
        <Menu.Item key={2}>
            <NavLink className="nav-link" to={appConstants.newInterviewRoute}>new interview</NavLink>
        </Menu.Item>

        <Menu.Item key={3}>
            <NavLink className="nav-link" to={appConstants.logoutRoute}>logout</NavLink>
        </Menu.Item>
    </Menu>
);