import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { cards } from '../constants';
import { Footer } from "./index";

// Map available layouts to their corresponding components
const layouts = {
  layout1: lazy(() => import('./Layout1')),
  layout2: lazy(() => import('./Layout2')),
  layout3: lazy(() => import('./Layout3')),
  // Add more layouts as needed
};

function CardDetail() {
  const { id } = useParams();
  const card = cards.find(card => card.id === id);

  if (!card) {
    return <h1 className="text-white text-3xl">Card not found</h1>;
  }

  // Get the corresponding layout component
  const LayoutComponent = layouts[card.layout];

  if (!LayoutComponent) {
    return <h1 className="text-white text-3xl">Layout not found</h1>;
  }

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
