import {nanoid} from 'nanoid'
import axios from './axios'

const Mock = require("mockjs")

//创建登录请求
Mock.mock(`${axios.defaults.baseURL}/test/login`, 'post', function (options) {
    let body = JSON.parse(options.body)

    if(body.name === '13148087' && body.password === '654321'){
        return {
            code: 200,
            data: {
                token: nanoid(),
                name: '13148087',
                list: [
                    {url: '/havePermissions'},
                ]
            },
            message: "登录成功"
        }
    }else if(body.name === 'test' && body.password === '654321'){
        return {
            code: 200,
            data: {
                token: nanoid(),
                name: 'test',
                list: []
            },
            message: "登录成功"
        }
    }else{
        return {
            code: 500,
            message: "用户名或密码错误,请使用->用户名：13148087 密码：654321 进行查看"
        }
    }
})
//创建退出请求
Mock.mock(`${axios.defaults.baseURL}/test/loginOut`, 'post', function () {
    return {
        code: 200,
        message: "退出成功"
    }
})
