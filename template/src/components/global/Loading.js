import {Row, Space, Spin} from 'antd';

export default function Loading() {
    return (
        <Row style={{width: '100%', height: '100vh'}} align="middle" justify="center">
            <Space>
                <Spin tip="Loading" size="large"/>
            </Space>
        </Row>
    )
}
