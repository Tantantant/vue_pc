import { v4 as uuidv4 } from 'uuid'


/* 
    整体流程
        先读取本地localStorage有没有userTempId
        如果有直接使用
        如果没有就创建userTempId，同时保存在localStore中
*/
function getUserTempId() {
    let userTempId = localStorage.getItem('userTempId')

    if (userTempId) {
        return userTempId
    }

    userTempId = uuidv4();

    localStorage.setItem("userTempId", userTempId)

    return userTempId;
}

export default getUserTempId