import React, { useState } from "react";
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";
import { faBars,faUserCircle,faToggleOn } from "@fortawesome/free-solid-svg-icons";

export function NavaBar (){
    const [showSle, setShowSle] =useState(true);
    return(
       
           <div className="NavbarForm">
              <div className="LeftSide">
                   <h2 className="nav_text">BUILD FORM</h2>
                   <FontAwesomeIcon icon={faWpforms} className="formIcon"/>
                  {/* <select className="S-box" id={showSl ? "hiddenB":""}>
                    <option className="O-box" value="">
                        Forms
                    </option>
                    <option className="O-box" value="">
                        Tables
                    </option>
                  </select> */}
              </div> 
              <div className="RightSide" >
              <FontAwesomeIcon  id="onClickBotn1" icon={faBars}  onClick={() =>setShowSle(!showSle) } className="BarIcon"/> 

                <div className="nav_links" id={showSle ? "hidden":""}>
                <button className="SEND_Botn"> Themes</button>
                   <button className="SEND_Botn"> Send</button>
                 
                   <button className="PreView_Botn"> Preview</button>
                   
                       
                  

                </div>
              
              
                <FontAwesomeIcon icon={faUserCircle} className="UserIcon"/>

                   
            </div>
           </div>
    );
}