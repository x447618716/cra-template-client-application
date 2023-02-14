import {Row, Button, Form, Input, message} from 'antd';
import {useDispatch} from 'react-redux'
import {updateName, updateToken, updatePermission} from "../stores/reducer/globalSlice";
import {useNavigate} from "react-router-dom";
import {login} from "../api";
import loginCss from '../assets/css/login.module.css'

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //登录
    const handleLogin = values => {
        login({
            name: values.name || '',
            password: values.password || ''
        }).then(res => {
            if (res.code === 200) {
                dispatch(updateName(res.data.name))
                dispatch(updateToken(res.data.token))
                dispatch(updatePermission(res.data.list))
                message.success(res.message)
                navigate('/')
            } else {
                message.error(res.message);
            }
        })
    }

    return (
        <Row className={loginCss.loginBox} align="middle" justify="center">
            <div className={loginCss.left}></div>
            <Row className={loginCss.right} align="middle" justify="center">
                <Form className={loginCss.loginFrom} name="basic" initialValues={{remember: true}}
                      onFinish={handleLogin}>
                    <Form.Item name="name" rules={[{required: true, message: 'Please input your username!'}]}>
                        <Input className={loginCss.inputClass} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item name="password" rules={[{required: true, message: 'Please input your password!'}]}>
                        <Input.Password className={loginCss.inputClass} placeholder="Password"/>
                    </Form.Item>
                    <Form.Item>
                        <Button className={loginCss.loginBtn} type="primary" size="large" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </Row>
        </Row>
    )
}
