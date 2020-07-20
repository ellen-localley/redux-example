import React, { useState } from "react";

const Info = () => {
    const [userid, setUserid] = useState('')
    const [password, setPassword] = useState('')
    const onChangUserid = e => {setUserid(e.target.value)}
    const onChangPassword = e => {setPassword(e.target.value)}

    return (
        <>
            <div>
                <input type={"text"} value={userid} onChange={onChangUserid}/> <br/>
                <input type={"text"} value={password} onChange={onChangPassword}/>
            </div>
            <div>
                <b>아이디: </b> {userid} <br/>
                <b>비밀번호: </b> {password} <br/>
            </div>
        </>
    )
}
export default Info