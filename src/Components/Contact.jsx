import React from 'react';
import { Animation, Footer } from './index';  // Adjust the path if necessary

const Contact = () => (
  <div  >
    <div className="bg-primary w-full h-screen flex items-center justify-center">
      <div>
        <Animation />
      </div>
      <div className="ml-auto w-[530px] mr-40">
       
        <div className="text-gray font-ubuntu">
        <h1 className="text-white mt-4 font-ubuntu mb-1">Contact</h1>
        <p className=" font-ubuntu">furduiluiza@gmail.com</p>
        <h1 className="text-white font-ubuntu mb-1 mt-5">Bio</h1>
          <p className="font-ubuntu">
          I create illustrations for businesses, personal projects, and everything in between, combining creativity with a strong passion for visual storytelling. I love exploring different technologies and styles, from animation to illustration,
           constantly pushing myself to experiment and grow as a designer.
          </p>
        </div>
      
      </div>
      
      

    </div>
   
      <Footer/>
      
  
 
  </div>
);

export default Contact;
