import React, {Component} from "react";
import Tabs from "../../JS/tabs";

import './time.css'

class Time extends Component{
    componentDidMount(){
        Tabs();
    }
    changeActiveTab = (e)=>{
        let tabs = document.getElementsByClassName('tab');
        for(let i=0; i<tabs.length; i++){
            tabs[i].classList.remove('active');
        }
        e.target.classList.add('active');
        Tabs();
    }
    render(){
        return(
            <div className="time">
               <ul className="tabs">
                    <li data-tab="daily" className="tab active" >daily</li>
                    <li data-tab="weekly" className="tab" >weekly</li>
                    <li data-tab="monthly" className="tab" >monthly</li>
                </ul>
            </div>
        )
    }
}

export default Time;
