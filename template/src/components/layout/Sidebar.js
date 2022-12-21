import React from 'react';
import { Layout, Menu} from 'antd'
import {
    BarChartOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";

const { Sider } = Layout;

const items = [
    {
        key:"1",
        label: '导航栏',
        icon: React.createElement(UserOutlined),
        children:[
            {
                key:"1-1",
                label: <NavLink to="/">React Redux</NavLink>,
                icon: React.createElement(VideoCameraOutlined),
            },
            {
                key:"1-2",
                label: <NavLink to="/403">403</NavLink>,
                icon: React.createElement(VideoCameraOutlined),
            },
            {
                key:"1-3",
                label: <NavLink to="/404">404</NavLink>,
                icon: React.createElement(VideoCameraOutlined),
            }
        ]
    },
    {
        key:"2",
        label: <NavLink to="/login">登录页</NavLink>,
        icon: React.createElement(BarChartOutlined),
    }
]

export default function Sidebar(){
    const collapsed = useSelector((state) => state.global.collapse)
    return(
        <Sider theme="light" collapsed={collapsed}  reverseArrow>
            <Menu mode="inline" defaultSelectedKeys={['1-1']} items={items} />
        </Sider>
    )
}