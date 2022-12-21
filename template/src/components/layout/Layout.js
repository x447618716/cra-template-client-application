import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import {Layout} from 'antd';
import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {updateCollapse} from "../../stores/reducer/globalSlice";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

const {Content} = Layout;

export default function LayoutWrapper() {
    const collapsed = useSelector((state) => state.global.collapse)
    const dispatch = useDispatch()
    return (
        <Layout className="layoutWrapper">
            <Header/>
            <Layout>
                <Sidebar/>
                <Layout>
                    <Content className="layoutMain">
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'layoutCollapse',
                            onClick: () => dispatch(updateCollapse()),
                        })}
                        <Outlet/>
                    </Content>
                    <Footer/>
                </Layout>
            </Layout>
        </Layout>
    )
}