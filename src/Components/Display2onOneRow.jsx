import React from 'react';
import Lottie from 'lottie-react';

function Display2onOneRow({ card }) {
  const mediaItems = [
    ...(card.lottie ? [card.lottie] : []),
    ...(card.photos || []),
  ];

  return (
    <div className="bg-primary w-full min-h-screen flex flex-col items-center justify-start p-10 mt-20">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start md:items-center mb-8">
        <div className="text-center md:text-left md:mr-8 flex-1">
          <h1 className="text-white text-[24px] mb-4 font-ubuntu">{card.title}</h1>
          <p className="text-gray text-[14px] mb-10 font-ubuntu">{card.description}</p>
          <p className="text-gray text-[14px] font-ubuntu">Client: {card.client}</p>
          <p className="text-gray text-[14px] font-ubuntu">Tools used: {card.tools}</p>
          <p className="text-gray text-[14px] font-ubuntu">Year: {card.year}</p>
        </div>
        <div className="flex-1 md:ml-13">
          {mediaItems.length > 0 && (
            typeof mediaItems[0] === 'string' ? (
              <div className="flex justify-center items-center w-[500px] h-auto rounded-lg border-thin border-white ml-10 p-15">
                <img 
                  src={mediaItems[0]} 
                  alt="Main media"
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ) : (
              <Lottie
                animationData={mediaItems[0]}
                style={{ width: 540, height: 'auto' }}
                className="rounded-lg ml-10"
              />
            )
          )}
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-x-64"> {/* Increased gap to 10 */}
          {mediaItems.slice(1).map((item, index) => (
            <div key={index} className="flex justify-center items-center w-full h-auto">
              {typeof item === 'string' ? (
                <img src={item} alt={`media-${index + 1}`} className="object-contain max-w-full max-h-full rounded-lg mb-10" />
              ) : (
                <Lottie
                  animationData={item}
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded-lg mb-10"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Display2onOneRow;
