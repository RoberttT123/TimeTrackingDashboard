import React from "react";
import userImg from '../../images/image-jeremy.png';

import './userInfo.css'
const UserInfo = ()=>{
    return(
        <div className="userInfo">
            <img src={userImg} alt="Jeremy Robson"/>
            <h4> Report for</h4>
            <h1> Jeremy Robson</h1>

        </div>
     
    );
}
export default UserInfo;