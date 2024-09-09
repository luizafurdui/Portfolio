import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { cards } from '../constants';
import { Footer } from './index';

// Lazy load your layout components

const DisplayonRows = lazy(() => import('./DisplayonRows'));
const Grid = lazy(() => import('./grid'));  // Assuming you have a Grid component

// Map layout strings to components
const layoutComponents = {
  DisplayonRows: DisplayonRows,
  grid: Grid,
};

function CardDetail() {
  const { id } = useParams();
  const card = cards.find(card => card.id === id);

  if (!card) {
    return <h1 className="text-white text-3xl">Card not found</h1>;
  }

  // Get the corresponding layout component
  const LayoutComponent = layoutComponents[card.layout];

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