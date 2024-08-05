import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { cards } from '../constants';
import { Footer } from "./index";

function CardDetail() {
  const { id } = useParams();
  const card = cards.find(card => card.id === id);

  if (!card) {
    return <h1 className="text-white text-3xl">Card not found</h1>;
  }

  // Dynamically import the component based on the layout property
  const LayoutComponent = lazy(() => import(`./${card.layout}`));

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LayoutComponent card={card} />
      </Suspense>
      <Footer /> 
    </div>
  );
}

export default CardDetail;
