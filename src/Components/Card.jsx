import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, title, year, cover }) {
  return (
    <Link to={`/${id}`}>
      {/* Ensure consistent card sizing with proper spacing on all screen sizes */}
      <div className="w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[25vw] xl:w-[22vw] transition duration-500 ease-in-out hover:brightness-125 hover:shadow-lg">
        <div
          className="h-[90vw] sm:h-[45vw] md:h-[30vw] lg:h-[25vw] xl:h-[22vw] bg-cover bg-center"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
        <div className="mt-1">
          {/* Apply consistent responsive sizing and line heights */}
          <h1 className="font-ubuntu font-light text-[14px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[64px] xl:mt-6 leading-[28px] sm:leading-[32px] md:leading-[26px] lg:leading-[48px] xl:leading-[72px] text-gray ml-[11px]">
  {title}
</h1>

        </div>
      </div>
    </Link>
  );
}

export default Card;
