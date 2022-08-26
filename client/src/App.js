import logo from './logo.svg';
import React from 'react';
import './App.css';
import { LoginPageNew } from './myprojects/loginpage/LoginPage1';
import { SignPageNew } from './myprojects/SignUpPage.js/signUpPGE1.js';
import { NavaBar } from './myprojects/Navbar/navbar';
import { NavaBarNew } from './myprojects/NAVBAR NEW/navabarNew';
import { HomePage } from './myprojects/HomePage/home';
import { FormDevelopPage } from './myprojects/formCreationPage/formBuild';
import { FormNew } from './myprojects/formCreationPage/formCR';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { SingleLine } from './myprojects/user input form/singleline';




function App() {
  return (
    <div>

      {/* <SingleLine/> */}

       <BrowserRouter>
         <Routes>
          
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<LoginPageNew/>}/>
            <Route path="/signin" element={<SignPageNew/>}/>
            <Route path="/formpage" element={<FormNew/>}/>
            <Route path="/createAccount" element={<SignPageNew/>}/>
            
            

         </Routes>
       </BrowserRouter>
      
     
     
    </div>
  );
}

export default App;
