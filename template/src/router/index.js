import {lazy} from 'react';
import {createHashRouter} from "react-router-dom";

const Layout = lazy(() => import(/* webpackChunkName: "layout" */'../components/layout/Layout'))
const NoFound = lazy(() => import(/* webpackChunkName: "404" */'../views/NoFound'))
const NoAuthorized = lazy(() => import(/* webpackChunkName: "403" */'../views/NoAuthorized'))
const Login = lazy(() => import(/* webpackChunkName: "login" */'../views/Login'))
const Home = lazy(() => import(/* webpackChunkName: "home" */'../views/home/Home'))

const router = createHashRouter([
    { path: '/login', element:  <Login/> },
    { path: '*', element: <NoFound/> },
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {   path: '/404',
                element:  <NoFound/>
            },
            {   path: '/403',
                element:  <NoAuthorized/>
            },
        ],
    },
], {
    basename: process.env.BASE_URL
})

export default router