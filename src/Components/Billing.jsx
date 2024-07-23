import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (

    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient" style={{ backgroundColor: 'white' }} />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient" style={{ backgroundColor: 'pink' }} />
      </div>

      <div className={layout.sectionInfo}>
        <h2>Easily control your <br className="sm:block hidden"/>billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Professional Experts are appointed to undertake specific,
         limited and one-off pieces of work over a short and defined timescale</p>

         <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
          <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
         </div>

      </div>
    </section>
);

export default Billing;
