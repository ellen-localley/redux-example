import React, {useState} from "react";
import {bool} from "prop-types";
import {MDBBtn} from "mdbreact";
import SigninTest from "./SigninTest";

const HideTest:React.FC = () => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <MDBBtn onClick={()=>{setVisible(!visible)}}>숨기기</MDBBtn>
            { visible ? `보이기` : `숨기기` }
            <hr/>
            { visible && <SigninTest/> }
        </>
    )
}
export default HideTest