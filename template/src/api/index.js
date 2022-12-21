import axios from "../axios";

/**
 * 登录
 * @author 谢荣生
 * @param{String} name     账号
 * @param{String} password 密码
 * @version 1.0.0
 * @datetime 2022-11-25 11:27:16
 * @inheritDoc
 * @return
 * */
export const login = ({name,password}) => axios.post("/test/login", {
    name,
    password
});