import {lazy} from 'react';
import {useRoutes} from "react-router-dom";
import {store} from "../stores/index";
import {useSelector} from "react-redux";

const Layout = lazy(() => import(/* webpackChunkName: "layout" */'../components/layout/Layout'))
const NoFound = lazy(() => import(/* webpackChunkName: "404" */'../views/NoFound'))
const NoAuthorized = lazy(() => import(/* webpackChunkName: "403" */'../views/NoAuthorized'))
const Login = lazy(() => import(/* webpackChunkName: "login" */'../views/Login'))
const Home = lazy(() => import(/* webpackChunkName: "home" */'../views/home/Home'))
const HavePermissions = lazy(() => import(/* webpackChunkName: "HavePermissions" */'../views/HavePermissions/HavePermissions'))


//需要鉴权的路由表
const permissionRouter = [
    {
        path: '/havePermissions',
        element: <HavePermissions/>,
        permission: <HavePermissions/>
    }
]


/**
 *  在此只实现简单的路由策略  对于深层嵌套的路由需要自行编写递归方法来实现
 * */
const addRouterPermission = (menuRouter, permissionRouter) => {
    permissionRouter.forEach(item => {
        if (menuRouter.findIndex(obj => obj.url === item.path) === -1) {
            item.element = <NoAuthorized/>
        } else {
            item.element = item.permission
        }
    })
    return permissionRouter
}


export default function Router() {
    let token = store.getState().global.token;
    let permissionList = useSelector((state) => state.global.permissionList);
    let dynamicRoutes = addRouterPermission(permissionList, permissionRouter)
    const basicRoute = useRoutes([
        {path: '/login', element: <Login/>},
        {path: '*', element: <NoFound/>}
    ]);
    const dynamicRouter = useRoutes([
        {path: '/login', element: <Login/>},
        {path: '*', element: <NoFound/>},
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                ...dynamicRoutes
            ],
        },
    ]);
    return token ? dynamicRouter : basicRoute
}
