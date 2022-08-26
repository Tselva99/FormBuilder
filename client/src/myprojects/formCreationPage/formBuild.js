import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import './formBuild.css';
import { faCaretDown, } from "@fortawesome/free-solid-svg-icons";
export function FormDevelopPage(){
    // const [showDropDown, setShowDropDown]=useState(false);
    return(

       
        <div className="container">
            {/* <h1>custom application</h1> */}
            <div className="">
              <div className="formCreatePage">
                 <div className="tools">
                 <h4 className="dropbox">
                                BASIC FIELDS
                    <FontAwesomeIcon id="dropIcon"  />
                    </h4>
                      <div className="toolsDrop">
                          <div className="firstLine row">
                            <div className="toolsList1 text-center">
                                <h5>Single Line</h5>
                            </div>
                            <div className="toolsList2" >
                                <h5>Multi Line</h5>
                            </div>
                        </div>
                        <div className="firstLine">
                            <div className="toolsList1">
                                <h5>Number</h5>
                            </div>
                            <div className="toolsList2">
                                <h5>Decimal</h5>
                            </div>
                        </div>
                        <div className="firstLine">
                          
                                <h5>Name</h5>
                            
                            
                                <h5>Address</h5>
                        
                        </div>
                        <div className="firstLine">
                            <div className="toolsList1">
                                <h5>Phone</h5>
                            </div>
                            <div className="toolsList2">
                                <h5>Email</h5>
                            </div>
                        </div>
                        <div className="firstLine">
                            <div className="toolsList1">
                                <h5>Date</h5>
                            </div>
                            <div className="toolsList2">
                                <h5>Time</h5>
                            </div>
                        </div>
                        <div className="firstLine">
                            <div className="toolsList1">
                                <h5>Date-Time</h5>
                            </div>
                            <div className="toolsList2">
                                <h5>Decision Box</h5>
                            </div>
                        </div>
                        <div className="firstLine">
                            <div className="toolsList1">
                                <h5>Dropdown</h5>
                            </div>
                            <div className="toolsList2">
                                <h5>Radio</h5>
                            </div>
                        </div>
                        <div className="firstLine">
                            <div className="toolsList1">
                                <h5>Multi Choice</h5>
                            </div>
                            <div className="toolsList2">
                                <h5>Choicebox</h5>
                            </div>
                        </div>
                        <div className="firstLine">
                            <div className="toolsList1">
                                <h5>Website</h5>
                            </div>
                            <div className="toolsList2">
                                <h5>Curerncy</h5>
                            </div>
                        </div>
                        <div className="firstLine">
                            <div className="toolsList1">
                                <h5>File Upload</h5>
                            </div>
                            <div className="toolsList2">
                                <h5>Image Upload</h5>
                            </div>
                        </div>
                        <div className="firstLine">
                            <div className="toolsList1">
                                <h5>Section</h5>
                            </div>
                            <div className="toolsList2">
                                <h5>page Break</h5>
                            </div>
                        </div>
                        <div className="firstLine">
                            <div className="toolsList1">
                                <h5>Slider</h5>
                            </div>
                            <div className="toolsList2">
                                <h5>Rating</h5>
                            </div>
                        </div>
                        <div className="firstLine">
                            <div className="toolsList1">
                                <h5>Decription</h5>
                            </div>
                            <div className="toolsList2">
                                <h5>Unique ID</h5>
                            </div>
                        </div>



                    </div>
    </div>


                    <div className="formPreview">
                                    <h1>33</h1>   
                    </div>
                    <div className="properties">

        <h1>6666</h1>

                    </div>
                </div>


</div>
                </div>
        
    
    );
}