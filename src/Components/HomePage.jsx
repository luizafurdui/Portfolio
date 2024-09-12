import React from 'react';
import styles from "../style";
import { Card, Footer } from "./index";
import { cards } from '../constants';

function HomePage() {
  return (
    <div className="bg-primary min-h-screen w-full flex flex-col">
      <div className="relative z-10 mt-24 flex-grow">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="w-full sm:w-[940px] mx-auto">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {cards.map((card, index) => (
                  <div key={index} className="flex justify-center">
                    <Card id={card.id} title={card.title} year={card.year} cover={card.cover} />
                  </div>
                ))}
              </div>
            </div>
            <h2 className="font-ubuntu font-light text-[16px] leading-[32.4px] text-white my-8 text-center">
              Get ready for a new wave of innovation
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
