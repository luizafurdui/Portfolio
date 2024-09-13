import React from 'react';
import { Animation, Footer } from './index'; // Adjust the path if necessary

const Contact = () => (
  <div>
    {/* Full screen background for the contact page */}
    <div className="bg-primary w-full h-screen flex flex-col md:flex-row items-center justify-between">

      {/* Animation Section (Stacked on top on mobile, aligned left on larger screens) */}
      <div className="w-full md:w-auto h-full flex items-center justify-center md:justify-start p-0 mb-4 md:mb-0">
        <Animation />
      </div>

      {/* Contact Information */}
      <div className="w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] p-6 sm:p-8 md:p-10 text-gray font-ubuntu text-center md:text-left">
      
        {/* Contact Header */}
        <h1 className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[26px] xl:text-[60px] font-ubuntu mb-2">Contact</h1>

        {/* Email */}
        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[55px] font-ubuntu mb-6">furduiluiza@gmail.com</p>

        {/* Bio Header */}
        <h1 className="text-white font-ubuntu mb-2 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[26px] xl:text-[60px]">Bio</h1>

        {/* Bio Paragraph */}
        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[55px] font-ubuntu leading-relaxed">
        I’m a self-taught graphic designer with 77 years of experience in designing and illustrating for businesses, personal projects, and more. My work spans across various mediums, including 2D and 3D illustration, animation and web design. I have a strong passion for visual storytelling and enjoy exploring different technologies and styles to bring creative ideas to life.  </p>
      
      </div>

    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default Contact;
