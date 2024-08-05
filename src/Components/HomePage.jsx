import React from 'react';
import styles from "../style";
import { Card, Footer } from "./index";
import { cards } from '../constants';

function HomePage() {
  return (
    <div className="bg-primary w-full overflow-hidden relative">
  
    
    {/* Gradient Background */}
    <div className="absolute z-0 top-20 left-1/2 transform -translate-x-1/2 w-[10%] h-[300px] rounded-full pink__gradient" style={{ backgroundColor: 'pink' }} />

    <div className="relative z-10 mt-40">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="w-[740px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {cards.map((card, index) => (
                <div key={index}>
                  <Card id = {card.id} title={card.title} year={card.year} cover={card.cover} />
                </div>
              ))}
            </div>
          </div>
          <h2 className="font-ubuntu font-light text-[18px] leading-[32.4px] text-white my-8 text-center">
            Get ready for a new wave of innovation
          </h2>
        </div>
      </div>
    </div>

    <Footer />
  </div>
  )
}

export default HomePage
