import React, { useState } from "react";
import './navbarNew.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';


export function NavaBarNew(){
    const [showSl, setShowSl] =useState(false);
    return(
       
           <div className="NavBAR">
              <div className="leftSide">
                   <h2 className="nav_text_1">BUILD FORM</h2>
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
              <div className="rightSide" >
              <FontAwesomeIcon id="onClickBotn" icon={faBars} className="BarIcon"  onClick={() =>setShowSl(!showSl) }/>

                <div className="nav_links" id={showSl ? "hidden":""}>
                    
                   <Link to="/login"><button className="log_In_Botn"> Login</button></Link>
                  <Link to="/signin"> <button className="sign_in_Botn"> SignUp</button></Link> 

                </div>
                 

                   
            </div>
           </div>
    );
}