import React from 'react';
import styles from "../style";
import { Card, Footer } from "./index";
import { cards } from '../constants';

function HomePage() {
  return (
    <div className="bg-primary min-h-screen w-full flex flex-col items-center mt-10 xl:mt-20">
      <div className="relative z-10 mt-24 flex-grow">
        {/* Ensure container scales properly */}
        <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-16">
          {/* Grid layout with 3 columns on xl screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-20 justify-center">
            {cards.map((card, index) => (
              <div key={index} className="flex justify-center">
                <Card id={card.id} title={card.title} year={card.year} cover={card.cover} />
              </div>
            ))}
          </div>
          {/* Adjusted text sizes for larger screens */}
          <h2 className="font-ubuntu font-light text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[34px] leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[48px] xl:leading-[72px] text-white my-8 text-center">
            Get ready for a new wave of innovation
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
