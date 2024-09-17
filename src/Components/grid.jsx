import React from 'react';
import Lottie from 'lottie-react';

function DisplayGrid({ card }) {
  // All media items, including the first one, should be displayed in the grid
  const mediaItems = [
    ...(card.lottie ? [card.lottie] : []),  // Lottie animation data is now added correctly
    ...(card.photos || []),
  ];

  return (
    <div className="bg-primary w-full min-h-screen flex flex-col items-center justify-start p-10 mt-20 xl:mt-60">
      {/* Centered text and description at the top */}
      <div className="w-full max-w-6xl text-center mb-8">
        <h1 className="text-white text-[24px] xl:text-[62px] mb-4 font-ubuntu xl:text-[25px] ">{card.title}</h1>
        <p className="text-gray text-[14px] mb-10 font-ubuntu xl:text-[25px] ">{card.description}</p>
        {card.client && (
          <p className="text-gray text-[14px] font-ubuntu xl:text-[25px] ">Client: {card.client}</p>
        )}
        <p className="text-gray text-[14px] xl:text-[30px] font-ubuntu xl:text-[25px] ">Tools used: {card.tools}</p>
        <p className="text-gray text-[14px] xl:text-[30px] font-ubuntu xl:text-[25px] ">Year: {card.year}</p>
      </div>

      {/* Grid displaying all media items */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {mediaItems.map((item, index) => (
            <div key={index} className="flex justify-center items-center w-full h-auto">
              {typeof item === 'string' ? (
                <img 
                  src={item} 
                  alt={`media-${index + 1}`} 
                  className="object-contain w-full h-auto xl:w-[400px] xl:h-[400px]"  // Larger images for xl screens
                />
              ) : (
                <Lottie
                  animationData={item}  // Ensure you're passing correct animation data
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded-lg mb-10 xl:w-[800px] xl:h-[600px]"  // Larger Lottie animation for xl screens
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayGrid;
