import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, title, year, cover }) {
  return (
    <Link to={`/${id}`}>
      <div className="w-[300px] transition duration-500 ease-in-out hover:brightness-125 hover:shadow-lg">
        <div
          className="h-[300px] bg-cover bg-center"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
        <div className="mt-1">
          <h1 className="font-ubuntu font-light text-[16px] leading-[32px] text-gray ml-[11px]">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default Card;
