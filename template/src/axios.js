import {store} from './stores'
import axios from 'axios';
import { message } from 'antd';



//添加请求收集器主要用于防止同一请求地址在请求未响应前多次请求（对于响应数据缓慢接口 及 新增接口（快速点击新增多个相同数据）等尤为重要 ）
let requestUrlList = []; //请求地址集
let requestTimeStamp = []; //请求时间戳
let timer = null; //定时器对象



//全局配置axios
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:8989';
} else {
    axios.defaults.baseURL = 'http://localhost:8989';
}
axios.defaults.timeout = 10000;

//全局取消(取消所有请求)
//axios.defaults.cancelToken = source.token;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    let token = store.getState().global.token;
    if (token) {
        config.headers.userId = token;
    }
    //单请求添加取消事件
    let source = axios.CancelToken.source();
    config.cancelToken = source.token;
    //判断定时回收器是否存在不存在启动它
    if (!timer) {
        timerRecycling();
    }
    //判断当前请求是否已在请求列表中
    if (requestUrlList.includes(config.url)) {
        source.cancel(config.url);
    } else {
        requestUrlList.push(config.url);
        requestTimeStamp.push(new Date().getTime());
    }
    return config;
}, function (error) {
    let url;
    if(axios.isCancel(error)){
        url = error.message.url;
    }else{
        url = error.config.url;
    }
    deleteRequestItem(url);
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    deleteRequestItem(response.config.url);
    return response.data;
}, function (error) {
    let url;
    if(axios.isCancel(error)){
        url = error.message.url;
        message.warning("当前请求服务器正在处理中，请勿重复操作！");
    }else{
        url = error.config.url;
        message.error(error.toString());
    }
    deleteRequestItem(url);
    return Promise.reject(error);
});

//删除指定项
const deleteRequestItem = url => {
    let index = requestUrlList.findIndex(item => item === url);
    if (index !== -1) {
        requestUrlList.splice(index, 1);
        requestTimeStamp.splice(index, 1);
    }
};
//定时回收
const timerRecycling = () => {
    timer = setInterval(() => {
        //当前时间戳
        let currentTimeStamp = new Date().getTime();
        if (requestUrlList.length) {
            requestTimeStamp.forEach((item, index) => {
                //请求列中项存在时间超1分钟将其清除
                if (currentTimeStamp - item > 60000) {
                    requestUrlList.splice(index, 1);
                    requestTimeStamp.splice(index, 1);
                }
            })
        } else {
            //清除定时器
            clearInterval(timer);
        }
    }, 60000)
};


export default axios
