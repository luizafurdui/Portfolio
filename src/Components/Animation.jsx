import React, { useEffect } from 'react';
import gsap from 'gsap';

function Animation() {
  useEffect(() => {
    // Create a timeline
    const tl = gsap.timeline();

    // Animate divs growing to their full width with faster animation
    tl.to(".Line1 .d1, .Line1 .d1, .Line3 .d3, .Line4 .d4, .Line5 .d5", { width: 150, duration: 0.3, ease: "power3.out", stagger: 0.05 })
      .to(".Line2 .d2", { width: 380, duration: 0.7, ease: "power3.out" }, "<0.1")  // Nearly simultaneous start
      .to(".Line3 .d3", { width: 180, duration: 0.7, ease: "power3.out" }, "<0.1")
      .to(".Line4 .d4", { width: 80, duration: 0.7, ease: "power3.out" }, "<0.1")
      .to(".Line5 .d5", { width: 280, duration: 0.7, ease: "power3.out" }, "<0.1")
      .to(".Line6 .d6", { width: 360, duration: 0.7, ease: "power3.out" }, "<0.1")
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
