import { Layout, theme } from 'antd';
const { Header } = Layout;

export default function HeaderWrapper() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return(
        <Header className="layoutHeader"  style={{
            background: colorBgContainer,
        }}>
            <div className="logo">此处为logo占位</div>
        </Header>
    )
}