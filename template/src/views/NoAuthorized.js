import {Row} from 'antd';
import style from './test.module.css'
export default function NoAuthorized(){
    return(
        <Row className={style.warp} align="middle" justify="center">
            <div className={style.test}>403</div>
        </Row>
    )
}
