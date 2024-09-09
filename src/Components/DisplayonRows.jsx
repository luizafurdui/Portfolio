import React from 'react';
import Lottie from 'lottie-react';

function DisplayOnePerRow({ card }) {
  // Collect all media items (Lottie, Rive, and photos)
  const mediaItems = [
    ...(card.lottie ? [card.lottie] : []),
    ...(card.riv ? [<card.riv key="rivAnimation" />] : []),  // Rive animation component
    ...(card.photos || []),  // Photos or other images
  ];

  return (
    <div className="bg-primary w-full min-h-screen flex flex-col items-center justify-start p-10 mt-20">
      {/* Text and first media item displayed in a row for desktop */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start md:items-center mb-8">
        {/* Text on the left */}
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

        {/* First media item on the right for desktop only */}
        <div className="flex-1 md:ml-13 hidden md:flex">  {/* Only display on larger screens */}
          {mediaItems.length > 0 && (
            typeof mediaItems[0] === 'string' ? (
              <div className="flex justify-center items-center w-[500px] h-auto rounded-lg border-thin border-gray ml-10 p-15">
                <img 
                  src={mediaItems[0]} 
                  alt="Main media"
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ) : typeof mediaItems[0] === 'object' && mediaItems[0].layers ? (
              <Lottie
                animationData={mediaItems[0]}
                style={{ width: '500px', height: 'auto' }}
                className="rounded-lg mb-10"
              />
            ) : (
              mediaItems[0]  // Render Rive component if it's the first media item
            )
          )}
        </div>
      </div>

      {/* Media items displayed in a column for mobile */}
      <div className="w-full max-w-4xl flex flex-col gap-y-8">
        {mediaItems.map((item, index) => (
          <div key={index} className={`flex justify-center items-center w-full h-auto ${index === 0 ? 'md:hidden' : ''}`}>
            {typeof item === 'string' ? (
              <img src={item} alt={`media-${index + 1}`} className="object-contain max-w-full max-h-full rounded-lg mb-10" />
            ) : typeof item === 'object' && item.layers ? (
              <Lottie
                animationData={item}
                style={{ width: '100%', height: 'auto' }}
                className="rounded-lg mb-10"
              />
            ) : (
              item  // Render Rive animation or other components
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayOnePerRow;
