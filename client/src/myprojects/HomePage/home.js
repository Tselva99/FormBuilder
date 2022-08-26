import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import './home.css';
import formiamge from './form-image-1.png';
import addImage from './homeIMage.webp';
import { NavaBarNew } from "../NAVBAR NEW/navabarNew";
import {Link} from 'react-router-dom';

export function HomePage(){
    return(

        <div className="">
                <div className="homePage">
                    <NavaBarNew/>
                    <div className="form_title">
                           
                       <h1>Powerful Forms Get It Done.</h1>

                      <h4>We believe the right form makes all the difference. Go from busywork to less work with create your forms</h4>
                      {/* <img src={addImage} className="image-control"/>                    */}

                  <div id="carouselId" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselId" data-slide-to="1"></li>
                        <li data-target="#carouselId" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src={addImage} className="image-control" alt="First slide"/>
                            <div class="carousel-caption d-none d-md-block">
                              
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={addImage} className="image-control"alt="Second slide"/>
                            <div class="carousel-caption d-none d-md-block">
                              
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={addImage} className="image-control" alt="Third slide"/>
                            <div class="carousel-caption d-none d-md-block">
                               
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                  </div>
                  
                    <div className="secondPart" id="SeconSection">
                        <div>
                        <img src={formiamge} className="image_control_1"/>
                      
                        </div>
                        <div className="text_content">
                        <h2>Build the form you need in minutes</h2>

                        <p>Create professional-looking forms with no coding using 
                            online Form Builder. 
                            Then style your forms with your own logo,
                             fonts, and colors.</p>
                       </div>
                       
                      <div className="makeForm">
                        <h4>Create Form</h4>

                        <Link to="/formpage"><FontAwesomeIcon icon={faPlusSquare} className="Plusicon"/></Link>  
                      </div>
                    </div>
                  
                    </div>
                </div>

        </div>

    



    );

}