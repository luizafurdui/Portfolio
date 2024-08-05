import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, title, year, cover }) {
  return (
    <Link to={`/${id}`}>
    <div
      className="relative w-[233px] h-[257px] rounded-[9px] bg-cover bg-center transition duration-500 ease-in-out hover:brightness-125 hover:shadow-lg"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="absolute top-0 left-0">
        {/* <h1 className="font-ubuntu font-light text-[16px] leading-[32px] text-white mt-[13px] ml-[11px]">{year}</h1> */}
      </div>
      <div className="absolute bottom-0 left-0">
        <h1 className="font-ubuntu font-light text-[16px] leading-[32px] text-white ml-[11px] mb-2">{title}</h1>
      </div>
    </div>
  </Link>
  
  );
}

export default Card;
