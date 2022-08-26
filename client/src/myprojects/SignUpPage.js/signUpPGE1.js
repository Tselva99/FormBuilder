import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import  './signupPage.css';
import "@fortawesome/react-fontawesome";
import { faUserAlt,faEnvelope, faLock,faUserCheck,faUserLock,faLockOpen,faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function SignPageNew(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 SIGN_Page">
                        <div className="SIGNIN_BOX">
                          <form>
                             <fieldset>
                            <div className="signinInputField col-lg-12">
                                <h1 className=" text-center w-100">SIGNUP</h1>
                            </div>
                       

                            <div className="signinInputField col-lg-12">
                                <input type="text" placeholder=" Enter your username" id="inputBox" className="w-100" /><br />
                                <label id="eyeSymbol"><FontAwesomeIcon icon={faUserAlt} /></label>
                            </div>
                            <div className="signinInputField col-lg-12">
                                <input type="email" placeholder="Enter your Email-Id" id="inputBox" className="w-100" /><br />
                                <label id="eyeSymbol"><FontAwesomeIcon icon={faEnvelope} /></label>
                            </div>
                            <div className="signinInputField col-lg-12">
                            <input type="text" placeholder="Enter your password" id="inputBox" className="w-100" /><br />  
                            <label id="eyeSymbol"><FontAwesomeIcon icon={faEyeSlash} /></label>                          </div>
                            <div className="signinInputField col-lg-12">
                            <input type="text" placeholder="Confirm your password" id="inputBox" className="w-100" /><br /> 
                            <label id="eyeSymbol"><FontAwesomeIcon icon={faEyeSlash} /></label>           
                            </div>
                            <div className="signinInputField col-lg-12">
                                  <button className="LoginButton w-100">SIGNUP</button>
                            </div>
                            <div className="signinInputField col-lg-12" id="paraInline">
                              <p className="Already_memeber_hovering">Already a memeber ? </p>
                           <Link to="/login"><p className="login">Log In</p></Link>   
                            </div>
                             </fieldset>
                          </form>
                          </div>
                </div>

            </div>

        </div>
    );
}