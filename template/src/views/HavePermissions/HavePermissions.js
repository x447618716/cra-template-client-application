import {Row} from 'antd';
export default function HavePermissions(){
    return(
        <Row style={{width:'100%',height:'100vh'}} align="middle" justify="center">
            <div style={{fontSize:'30px',color:'chartreuse'}}>登录后，有权限才能看到，不然直接访问该路由显示403页面</div>
        </Row>
    )
}



