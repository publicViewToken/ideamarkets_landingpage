import logo from './logo.svg';

import React, { Component } from 'react';
import Header from './components/Header';

import './App.css';
import ad from '../src/1.jpeg'
import ad2 from '../src/2.jpeg'
import ad3 from '../src/3.jpeg'
import ad4 from '../src/4.jpeg'
import ad5 from '../src/5.jpeg'




function App() {
  return (

  <div className=''>
 
  <Header/>


   <div className="">
  
   <nav className=" fixed-top bg-light  ">
   
   <a  class="" 
           
            href="" // change to twitter address
            target="_blank"
            rel="noopener noreferrer"
          >
           
          
            
  
  </a>



        </nav>
     
   
   <div  className="col-lg-2 d-flex text-center ">
    
 
  

  
 
   </div>

  
 <div  class="centerr">
   <img src={ad2}  class="centerrr"   />
  
   </div>
    <div  class="centerr">
   <img src={ad3}  class="centerrr"   />
   
   </div>




    <div  class="centerr">
   <img src={ad4}  class="centerrr"   />
     
   </div>

    <div  class="centerr">
   <img src={ad5}  class="centerrr"   />
     
   </div>
   </div>
     </div>
  
  );
}

export default App;
