import React from 'react';
import { Animation, Footer } from './index';  // Adjust the path if necessary

const Contact = () => (
  <div  >
    <div className="bg-primary w-full h-screen flex items-center justify-center">
      <div>
        <Animation />
      </div>
      <div className="ml-auto w-[530px] mr-40">
        <h1 className="text-white font-ubuntu mb-2">Bio</h1>
        <div className="text-gray font-ubuntu">
          <p className="font-ubuntu">
            Hi, I’m Luiza. A self-taught designer and economic informatics student.
            My attitude is fueled by hard work. With a keen eye for design,
            I can transform any dull website into a captivating experience.
            My goal is to further develop my skills so I can bring even greater value to the team.
          </p>
        </div>
        <h1 className="text-white mt-4 font-ubuntu">Contact</h1>
        <p className="text-white font-ubuntu">furduiluiza@gmail.com</p>
      </div>
      
      

    </div>
   
      <Footer/>
      
  
 
  </div>
);

export default Contact;
