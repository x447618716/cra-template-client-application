import {Row} from 'antd';
import style from './test2.module.css'
export default function NoFound(){
    return(
        <Row className={style.warp} align="middle" justify="center">
            <div className={style.test}>404</div>
        </Row>
    )
}
