import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import  './LoginPageNew.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleUser  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export function LoginPageNew(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 login_Page">
                        <div className="LogIN_BOX">
                          <form>
                             <fieldset>
                            <div className="loginInputField col-lg-12">
                                <h1 className=" text-center w-100">LOGIN</h1>
                            </div>
                            <div className="loginInputField col-lg-12">
                            <FontAwesomeIcon icon={faCircleUser} className="User_Icon w-100" />

                            </div>

                            <div className="loginInputField col-lg-12">
                                <input type="text" placeholder="Username" id="inputBox" className="w-100" /><br />
                            </div>
                            <div className="loginInputField col-lg-12">
                                <input type="password" placeholder="Password" id="inputBox" className="w-100" /><br />
                            </div>
                            <div className=" col-lg-12">
                                <p className=" text-center forgotPass">Forgot Password ?</p>
                            </div>
                            <div className="loginInputField col-lg-12">
                                <button className="LoginButton w-100">Login</button>
                            </div>
                            <div className="loginInputField col-lg-12">
                                <p className=" text-center para_text2">Don't have an account?</p>
                           <Link to="/createAccount"><p className=" text-center para_text2">Create New Account</p></Link>     
                            </div>
                            {/* <div className="loginInputField col-lg-12">
                               
                            </div> */}
                             </fieldset>
                          </form>
                          </div>
                </div>

            </div>

        </div>
    );
}