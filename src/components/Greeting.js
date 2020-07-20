import React, { useState } from "react";
import {MDBBtn} from 'mdbreact';

const Greeting = () => {
    const [message, setMessage] = useState("")
    const onClickWelcome = () => setMessage("어서 오세요")
    const onClickBye = () => setMessage("안녕히 가세요")

    const [color, setColor] = useState("")
    const onClickRed = () => setColor("red")
    const onClickGreen = () => setColor("green")
    const onClickBlue = () => setColor("blue")

    return (
        <>
            <MDBBtn gradient="peach" onClick={onClickWelcome}>입장</MDBBtn>
            <MDBBtn gradient="blue" onClick={onClickBye}>퇴장</MDBBtn>
            <h1 style={{color}}>{message}</h1>
            <MDBBtn color={"danger"} onClick={onClickRed}>적색 변환</MDBBtn>
            <MDBBtn color={"success"} onClick={onClickGreen}>녹색 변환</MDBBtn>
            <MDBBtn color={"primary"} onClick={onClickBlue}>청색 변환</MDBBtn>
        </>
    )
}
export default Greeting