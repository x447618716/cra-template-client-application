import { Button,Space  } from 'antd';
import {login} from "../api";

export default function Login(){

    const handleLogin = () =>{
        login({
            name:'',
            password:''
        }).then(res=>{
            console.log(res)
        })
    }

    return(
        <Space wrap>
            <p>当前在登录页</p>
            <Button type="primary" onClick={handleLogin}>登录</Button>
        </Space>
    )
}