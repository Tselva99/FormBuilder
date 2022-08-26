
import React, { useState } from "react";
import './formCR.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faMobile,faInputN,faUser, faEnvelope, faCalendar, faCalendarDay, faTimes, faCalendarDays, faClock, faLock, faSquareCaretDown, faCircleDot, faAddressBook, faCheck, faCheckToSlot, faSquareCheck, faGlobe, faCreditCard,faIndianRupee, faFileUpload} from "@fortawesome/free-solid-svg-icons";
import { NavaBarNew } from "../NAVBAR NEW/navabarNew";
import { NavaBar } from "../Navbar/navbar";
import { faCalendarCheck,faCalendarClock} from "@fortawesome/free-regular-svg-icons";
import { faDropbox, faPage4, faPaypal } from "@fortawesome/free-brands-svg-icons";
// import { Offcanvas } from "bootstrap";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function FormNew(){
    const [showDropDown,setShowDropDown]=useState(true);
   var fields = 0;
  
   var  err = 0;
//    const [show, setShow] = useState(false);

//    const handleClose = () => setShow(false);    
//    const handleShow = () => setShow(true);
    
    return(
                <div className="container-fluid bg">
                        <div className="row ">
                                <NavaBar />



                                

                                <div className="  col-lg-4 ToolSet col-md-4  p-0">
                                        <div id="editOption"className="EditButton">
                                             <input type="button" id="butt" value="edit" onClick={()=>{
                                                            var d = document.getElementById('S-line-input').innerHTML ;

                                                                        
                                                            document.getElementById('editOption').innerHTML += d;

                                             }}/>
                                             {/* <div id="S-line-input" >
                                                   <input type="password" />
                                                   <input type="button" value="editt" onClick={()=>{
                                                        alert("mm");
                                                   }}/>
                                             </div> */}
                                        </div>
                               
                                                    <div className="editpage" id="S-line-input">
                                                        <div className="col-lg-12 col-sm-12 col-xs-12 col-xl-12 col-md-12" id="edit">
                                            <input type="text" className="text-center w-100 ml-0" size="50" id="formName" placeholder="FORM NAME" /><br />
                                            <lable>Field Label</lable><br />
                                            <input className=" ml-0 w-100" type="text" />
                                            <p>Hide field<input className=" ml-2 mt-1" type="checkbox" /></p>
                                            <p>Instruction<textarea rows="6" column="97" className="w-100 ml-0"></textarea></p>
                                            <div className=" text-center w-100"><button className=" btn m-1 p-3 S_L_sizebutton">Small</button ><button className=" p-3 m-1 btn S_L_sizebutton">Medium</button><button className="p-3 m-1 btn S_L_sizebutton">Large</button></div>
                                            <p>Place Holder<input className=" w-100 ml-0 mt-1" type="text" /></p>
                                            <p>Character limit</p>
                                            <input className=" ml-0 mt-0" placeholder="MIN" type="number" /><input className=" ml-0 mt-0" placeholder="MAX" type="number" />
                                      

                                           </div>
                                   
                                          </div>
                                                        
                                             

                                
                                        <h3 className=" text-center DropBOX">BASIC FIELDS</h3>
                                        <div className="fieldHead  ">
                                                <p className="Para_text">Field 1 <FontAwesomeIcon onClick={() => setShowDropDown(!showDropDown)} icon={faCaretDown} /></p>

                                                <p className="Para_text">Field 2 <FontAwesomeIcon onClick={() => setShowDropDown(!showDropDown)} icon={faCaretDown} /></p>
                                        </div>


                                        <div className="firstLine">

                                                <button onClick={() => {

                                                        if (fields != 40) {
                                                                document.getElementById('text').innerHTML += "<div class='previewBox'><input type='text' class='inputbox' name='first' value='' /><br /> </div>";


                                                                fields += 1;

                                                        } else {
                                                                if (err == 0) {
                                                                        document.getElementById('text').innerHTML += "<br /> maxim 40 No.of Allowed Only.";
                                                                        err = 1;
                                                                }
                                                                document.form.add.disabled = true;
                                                        }

                                                }} className=" btn toolBotn"><label>Single Line</label></button>
                                                <button onClick={() => {

                                                        if (fields != 40) {
                                                                document.getElementById('text').innerHTML += "<div class='text-center previewBox'><textarea col=" + 90 + " row=" + 3 + "></textarea><br /><i class='fa-solid fa-user'></i></div>";


                                                                fields += 1;

                                                        } else {
                                                                if (err == 0) {
                                                                        document.getElementById('text').innerHTML += "<br /> maxim 40 no.Allowed.";
                                                                        err = 1;
                                                                }
                                                                document.form.add.disabled = true;
                                                        }

                                                }} className="btn toolBotn" ><label>Multi Line</label>

                                                </button>
                                                <button onClick={() => {

                                                        if (fields != 40) {
                                                                document.getElementById('M_line').innerHTML += "<div class='previewBox'><input type='number' placeholder='1 2 3' name='first' value='' /><br /></div>";


                                                                fields += 1;

                                                        } else {
                                                                if (err == 0) {
                                                                        document.getElementById('text').innerHTML += "<br /> maxim 40 no.Allowed.";
                                                                        err = 1;
                                                                }
                                                                document.form.add.disabled = true;
                                                        }

                                                }} className="btn toolBotn" ><label>Number</label></button>


                                        </div>
                                        <div className="firstLine">

                                                <button
                                                        onClick={() => {

                                                                if (fields != 40) {
                                                                        document.getElementById('text').innerHTML += "<div class='previewBox'><input type='number' placeholder='.000' name='first' value='' /><br /></div>";


                                                                        fields += 1;

                                                                } else {
                                                                        if (err == 0) {
                                                                                document.getElementById('text').innerHTML += "<br /> maxim 40 no.Allowed.";
                                                                                err = 1;
                                                                        }
                                                                        document.form.add.disabled = true;
                                                                }

                                                        }}
                                                        className=" btn toolBotn"><span id="no">.00</span><label>Decimal</label></button>
                                                <button
                                                        onClick={() => {

                                                                if (fields != 40) {
                                                                        document.getElementById('text').innerHTML += " <div class='previewBox'><br/><input type='text' placeholder='First Name' name='first' value='' /> <input type='text' placeholder='Last Name' name='first' value='' /> </div>";


                                                                        fields += 1;

                                                                } else {
                                                                        if (err == 0) {
                                                                                document.getElementById('text').innerHTML += "<br /> maxim 40 no.Allowed.";
                                                                                err = 1;
                                                                        }
                                                                        document.form.add.disabled = true;
                                                                }

                                                        }} className="btn toolBotn">  <label id="emailIcon"><FontAwesomeIcon icon={faUser} /></label><label>Name</label></button>

                                                <button

                                                        onClick={() => {

                                                                if (fields != 40) {
                                                                        document.getElementById('text').innerHTML += "<div class='previewBox'><input type='text' placeholder='Address' Name' name='first' value='' /><br /> <input type='text' placeholder='Address line 2' Name' name='first' value='' /><input type='text' placeholder='city' Name' name='first' value='' /><input type='text' placeholder='state' Name' name='first' value='' /><br /><input type='text' placeholder='postal-code' Name' name='first' value='' /><input type='text' placeholder='country' Name' name='first' value='' /><br /> </div>";


                                                                        fields += 1;

                                                                } else {
                                                                        if (err == 0) {
                                                                                document.getElementById('text').innerHTML += "<br /> maxim 40 no.Allowed.";
                                                                                err = 1;
                                                                        }
                                                                        document.form.add.disabled = true;
                                                                }

                                                        }}
                                                        className="btn toolBotn"><label id="emailIcon"><FontAwesomeIcon icon={faAddressBook} /></label><label>Adress</label></button>


                                        </div>
                                        <div className="firstLine">

                                                <button
                                                        onClick={() => {

                                                                if (fields != 40) {
                                                                        document.getElementById('text').innerHTML += "<div class='previewBox'><input type='email' placeholder='E-MAIL' name='first' value='' /><label id='emailIcon'><FontAwesomeIcon icon={faEnvelope} /></label><label id='emailIcon'><FontAwesomeIcon icon={faEnvelope} /></label><br /></div>";


                                                                        fields += 1;

                                                                } else {
                                                                        if (err == 0) {
                                                                                document.getElementById('text').innerHTML += "<br /> maxim 40 no.Allowed.";
                                                                                err = 1;
                                                                        }
                                                                        document.form.add.disabled = true;
                                                                }

                                                        }} className=" btn toolBotn"><label id="emailIcon"><FontAwesomeIcon icon={faEnvelope} /></label><label>E-mail</label></button>
                                                <button
                                                        onClick={() => {

                                                                if (fields != 40) {
                                                                        document.getElementById('text').innerHTML += "<div class='previewBox'><input type='date' placeholder='1 2 3' name='first' value='' /><br /> </div>";


                                                                        fields += 1;

                                                                } else {
                                                                        if (err == 0) {
                                                                                document.getElementById('text').innerHTML += "<br /> maxim 40 no.Allowed.";
                                                                                err = 1;
                                                                        }
                                                                        document.form.add.disabled = true;
                                                                }

                                                        }}
                                                        className="btn toolBotn"><label id="emailIcon"><FontAwesomeIcon icon={faCalendarDays} /></label><label>Date</label></button>
                                                <button
                                                        onClick={() => {

                                                                if (fields != 40) {
                                                                        document.getElementById('text').innerHTML += "<div class='previewBox'><input type='time' placeholder='1 2 3' name='first' value='' /><br /></div>";


                                                                        fields += 1;

                                                                } else {
                                                                        if (err == 0) {
                                                                                document.getElementById('text').innerHTML += "<br /> maxim 40 no.Allowed.";
                                                                                err = 1;
                                                                        }
                                                                        document.form.add.disabled = true;
                                                                }

                                                        }}
                                                        className="btn toolBotn"><label id="emailIcon"><FontAwesomeIcon icon={faClock} /></label><label>Time</label></button>


                                        </div>
                                        <div className="firstLine">

                                                <button className=" btn toolBotn"><label id="emailIcon"><FontAwesomeIcon icon={faSquareCaretDown} /></label><label>Dropdown</label><label></label> </button>
                                                <button className="btn toolBotn"> <label id="emailIcon"><FontAwesomeIcon icon={faCircleDot} /></label><label>Radio</label></button>
                                                <button
                                                        onClick={() => {

                                                                if (fields != 40) {
                                                                        document.getElementById('text').innerHTML += "<div class='previewBox'><input type='password' placeholder='Password' name='first' value=''/></div>";
                                                                       

                                                                        var s = document.getElementById('editOption').innerHTML ;

                                                                        
                                                                        document.getElementById('text').innerHTML +=s;      
                                                                   
                                                                           
                                                                        fields += 1;

                                                                } else {
                                                                        if (err == 0) {
                                                                                document.getElementById('text').innerHTML += "<br/> maxim 40 no.Allowed.";
                                                                                err = 1;
                                                                        }
                                                                        document.form.add.disabled = true;
                                                                }

                                                        }}
                                                        className=" btn toolBotn"> <label id="emailIcon"><FontAwesomeIcon icon={faLock} /></label><label>Password</label><label></label> </button>



                                        </div>
                                        <div className="firstLine">

                                                <button className="btn toolBotn"><label id="emailIcon"><FontAwesomeIcon icon={faCheck} /></label><label>M-choice</label></button>
                                                <button className="btn toolBotn"> <label id="emailIcon"><FontAwesomeIcon icon={faSquareCheck} /></label><label>Decision</label></button>
                                                <button className="btn toolBotn"><label id="emailIcon"><FontAwesomeIcon icon={faClock} /></label><label>Date-Time</label></button>


                                        </div>
                                        <div className="firstLine">

                                                <button className=" btn toolBotn"><label id="emailIcon"><FontAwesomeIcon icon={faGlobe} /></label><label>Website</label></button>
                                                <button className="btn toolBotn"><label id="emailIcon"><FontAwesomeIcon icon={faIndianRupee} /></label><label>Currency</label> </button>
                                                <button className="btn toolBotn"><label>Section</label></button>


                                        </div>

                                        <div className="firstLine">

                                                <button className=" btn toolBotn"> <label id="emailIcon"><FontAwesomeIcon icon={faFileUpload} /></label><label>Upload</label></button>
                                                <button className="btn toolBotn"><label id="emailIcon"><FontAwesomeIcon icon={faCreditCard} /></label><label>PayMents</label> </button>
                                                <button className="btn toolBotn"><label>Page Break</label></button>


                                        </div>

                                        <div className="firstLine">

                                                <button className=" btn toolBotn"><label>MatrixChoice </label></button>
                                                <button className="btn toolBotn"><label>Image</label></button>
                                                <button className="btn toolBotn"><label>Number</label></button>


                                        </div>
                                        <div className="firstLine">

                                                <button className=" btn toolBotn"><label>Single Line</label></button>
                                                <button className="btn toolBotn"><label>Multi Line</label></button>
                                                <button className="btn toolBotn"><label>Number</label></button>


                                        </div>

                                        <div className="firstLine1" id={showDropDown ? "hidden" : ""}>

                                                <button className=" btn toolBotn">Single Line</button>
                                                <button className="btn toolBotn">Multi Line</button>
                                                <button className="btn toolBotn">Number</button>


                                        </div>
                                        <div className="firstLine1" id={showDropDown ? "hidden" : ""}>

                                                <button className=" btn toolBotn">Single Line</button>
                                                <button className="btn toolBotn">Multi Line</button>
                                                <button className="btn toolBotn">Number</button>


                                        </div>

                                        <div className="firstLine1" id={showDropDown ? "hidden" : ""}>

                                                <button className=" btn toolBotn">Single Line</button>
                                                <button className="btn toolBotn">Multi Line</button>



                                        </div>







                            </div>
                            <div className=" col-sm-12 col-md-8 col-lg-8 col-md-8 col-sm-8 preview">
                                    <div className="CA">
                                            <h1 >
                                                    FORM CREATE APPLICATION </h1>
                                    </div>
                                    <div className="APPLYvIEW" >
                                        <div className="form_outline">
                                            <div className="col-lg-12 col-sm-12 col-xs-12 col-xl-12 col-md-12">
                                                <div  id="text">
                                

                                         <input type="text" className="text-center" id="formName" placeholder="FORM NAME" />
                                            
                                                </div>
                                                <div className="text-ceter" id="M_line">
                                           <button className="M_line_edit" onClick={()=>
                                        {
                                                var s = document.getElementById('S-line-input').innerHTML ;

                                                                        
                                                document.getElementById('text').innerHTML += s;
                                        }}>click</button>

                                                    
                                            </div>
                                          </div>
                                          
                                   </div>


                                    </div>
                                    

                                 

                            </div>
                            


                        </div>

                </div>
        );
}
// render(<FormNew />);