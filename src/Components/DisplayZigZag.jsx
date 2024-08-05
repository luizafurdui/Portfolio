import React from 'react';
import Lottie from 'lottie-react';

function DisplayZigZag({ card }) {
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
          {card.client && (
            <p className="text-gray text-[14px] font-ubuntu">
              Client: 
              {card.clientLink ? (
                <a href={card.clientLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {card.client}
                </a>
              ) : (
                card.client
              )}
            </p>
          )}
          <p className="text-gray text-[14px] font-ubuntu">Tools used: {card.tools}</p>
          <p className="text-gray text-[14px] font-ubuntu">Year: {card.year}</p>
        </div>
        <div className="flex-1 md:ml-13">
          {mediaItems.length > 0 && (
            typeof mediaItems[0] === 'string' ? (
              <img 
                src={mediaItems[0]} 
                alt="Main media"
                className="w-[500px] h-auto rounded-lg border-thin border-white ml-10"
              />
            ) : (
              <Lottie
                animationData={mediaItems[0]}
                style={{ width: 640, height: 'auto' }}
                className="rounded-lg ml-10"
              />
            )
          )}
        </div>
      </div>
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {mediaItems.slice(1).map((item, index) => (
          <div 
            key={index} 
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            {typeof item === 'string' ? (
              <img 
                src={item} 
                alt={`media-${index + 1}`} 
                className={`w-[500px] h-auto object-cover rounded-lg mb-10 ${index % 2 === 0 ? 'ml-0 md:ml-20' : 'mr-0 md:mr-30'}`}
              />
            ) : (
              <Lottie
                animationData={item}
                style={{ width: '600px', height: 'auto' }}
                className={`rounded-lg border-thin border-white ${index % 2 === 0 ? 'ml-0 md:ml-30' : 'mr-0 md:mr-30'}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayZigZag;
