import React from 'react';
import { Animation, Footer } from './index'; // Adjust the path if necessary

const Contact = () => (
  <div>
    {/* Full screen background for the contact page */}
    <div className="bg-primary w-full h-screen flex items-center justify-between">

      {/* Animation Section (Always on the left, no margin) */}
      <div className="w-auto h-full flex items-center justify-start pl-0">
        <Animation />
      </div>
      <div className="w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[40vw] xl:mr-23 p-6 sm:p-8 md:p-10 lg:mr-10 text-gray font-ubuntu text-left">

{/* Contact Header */}
<h1 className="text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[66px] font-ubuntu mb-1">Contact</h1>

{/* Email */}
<p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[62px] font-ubuntu mb-5">furduiluiza@gmail.com</p>

{/* Bio Header */}
<h1 className="text-white font-ubuntu mb-1 mt-5 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[26px] xl:text-[66px]">Bio</h1>

{/* Bio Paragraph */}
<p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[62px] font-ubuntu leading-relaxed">
  I create illustrations for businesses, personal projects, and everything in between, combining creativity with a strong passion for visual storytelling. I love exploring different technologies and styles, from animation to illustration, constantly pushing myself to experiment and grow as a designer.
</p>

</div>

    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default Contact;
