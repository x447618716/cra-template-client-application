import {Layout, theme, Button, message, Row} from 'antd';
import {loginOut} from "../../api";
import {updateName, updatePermission, updateToken} from "../../stores/reducer/globalSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
const { Header } = Layout;

export default function HeaderWrapper() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginOUT = () => {
        loginOut().then(res => {
            if (res.code === 200) {
                dispatch(updateName(''))
                dispatch(updateToken(''))
                dispatch(updatePermission([]))
                message.success(res.message)
                navigate('/login')
            } else {
                message.error(res.message);
            }
        })
    }

    return(
        <Header className="layoutHeader"  style={{
            background: colorBgContainer,
        }}>
            <Row align="middle" justify="space-between">
                <div className="logo">此处为logo占位</div>
                <Button type="primary" size="large" onClick={loginOUT}>退出</Button>
            </Row>
        </Header>
    )
}
