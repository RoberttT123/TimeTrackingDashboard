import React from "react";

import './tabContent.css';

const TabContent = (props)=>{
    return(
        <div id={props.tab} className="tabContent"> 
            <h1>{props.tab}</h1>
        </div>
    );

}
export default TabContent