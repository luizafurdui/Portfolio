import React, { useEffect } from 'react';
import gsap from 'gsap';

function Animation() {
  useEffect(() => {
    // Detect if the screen size is 'xl' (1280px or greater)
    const isXL = window.innerWidth >= 1280;

    // Set different widths based on screen size
    const smallScreenWidths = {
      Line1: 150,
      Line2: 380,
      Line3: 180,
      Line4: 80,
      Line5: 280,
      Line6: 360,
    };

    const xlScreenWidths = {
      Line1: 250,
      Line2: 500,
      Line3: 300,
      Line4: 150,
      Line5: 400,
      Line6: 500,
    };

    // Choose appropriate widths based on screen size
    const widths = isXL ? xlScreenWidths : smallScreenWidths;

    // Create a timeline
    const tl = gsap.timeline();

    // Animate divs growing to their full width based on screen size
    tl.to(".Line1 .d1, .Line1 .d1, .Line3 .d3, .Line4 .d4, .Line5 .d5", {
      width: widths.Line1, duration: 0.3, ease: "power3.out", stagger: 0.05
    })
      .to(".Line2 .d2", { width: widths.Line2, duration: 0.7, ease: "power3.out" }, "<0.1")
      .to(".Line3 .d3", { width: widths.Line3, duration: 0.7, ease: "power3.out" }, "<0.1")
      .to(".Line4 .d4", { width: widths.Line4, duration: 0.7, ease: "power3.out" }, "<0.1")
      .to(".Line5 .d5", { width: widths.Line5, duration: 0.7, ease: "power3.out" }, "<0.1")
      .to(".Line6 .d6", { width: widths.Line6, duration: 0.7, ease: "power3.out" }, "<0.1")
      .to(".patrat", { width: 10, height: 10, duration: 0.3, ease: "power3.out", stagger: 0.05 }, "<0.1");

  }, []);

  return (
    <div className="SquareAnimations space-y-4">
      <div className="Line1 flex space-x-2">
        <div className="d1 bg-purple-gradient h-3" data-width="150px"></div>
        <div className="d1 bg-purple-gradient h-3" data-width="80px"></div>
      </div>
      <div className="Line2 flex space-x-2">
        <div className="d2 bg-purple-gradient h-3" data-width="280px"></div>
      </div>
      <div className="Line3 flex space-x-2">
        <div className="d3 bg-purple-gradient h-3" data-width="180px"></div>
        <div className="d3 bg-purple-gradient h-3" data-width="50px"></div>
      </div>
      <div className="Line4 flex space-x-2">
        <div className="d4 bg-purple-gradient h-3" data-width="80px"></div>
        <div className="d8 bg-purple-gradient h-3" data-width="20px"></div>
      </div>
      <div className="Line5 flex space-x-2">
        <div className="d5 bg-blue-gradient h-3" data-width="280px"></div>
      </div>
      <div className="Line6 flex space-x-2">
        <div className="d6 bg-purple-gradient h-3" data-width="160px"></div>
      </div>
    </div>
  );
}

export default Animation;
