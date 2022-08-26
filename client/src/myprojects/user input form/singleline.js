
import React from "react";

// import './Sline.css';

export function SingleLine(){
    return(

       <div className="container">
         <div className="row">
            

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
                                                 
        

         </div>

       </div>


    );

}