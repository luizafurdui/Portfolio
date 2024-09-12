import React, { useEffect } from 'react';
import gsap from 'gsap';

function Animation() {
  useEffect(() => {
    // Function to update animation based on window size
    const updateAnimation = () => {
      const windowWidth = window.innerWidth;

      // Detect large screens (like 'lx' 1440px or greater)
      const isLX = windowWidth >= 1440;
      const isXL = windowWidth >= 1280 && windowWidth < 1440;

      // Sizes for small and large screens
      const smallScreenSizes = {
        Line1: { width: 150, height: 10},
        Line2: { width: 380, height:  10},
        Line3: { width: 180, height:  10},
        Line4: { width: 80, height:  10},
        Line5: { width: 280, height:  10},
        Line6: { width: 360, height:  10},
      };

      const largeScreenSizes = {
        Line1: { width: 150, height: 20 },
        Line2: { width: 380, height: 20 },
        Line3: { width: 180, height: 20 },
        Line4: { width: 80, height: 20 },
        Line5: { width: 280, height: 20 },
        Line6: { width: 360, height: 20 },
      };

      // Choose appropriate sizes based on screen size
      const sizes = isLX || isXL ? largeScreenSizes : smallScreenSizes;

      // Kill any previous animations
      gsap.killTweensOf(".Line1 .d1, .Line2 .d2, .Line3 .d3, .Line4 .d4, .Line5 .d5, .Line6 .d6");

      // Create new GSAP timeline
      const tl = gsap.timeline();

      // Animate elements to their respective width and height
      tl.to(".Line1 .d1, .Line3 .d3, .Line4 .d4, .Line5 .d5", {
        width: sizes.Line1.width,
        height: sizes.Line1.height,
        duration: 0.3,
        ease: "power3.out",
        stagger: 0.05
      })
        .to(".Line2 .d2", { width: sizes.Line2.width, height: sizes.Line2.height, duration: 0.7, ease: "power3.out" }, "<0.1")
        .to(".Line3 .d3", { width: sizes.Line3.width, height: sizes.Line3.height, duration: 0.7, ease: "power3.out" }, "<0.1")
        .to(".Line4 .d4", { width: sizes.Line4.width, height: sizes.Line4.height, duration: 0.7, ease: "power3.out" }, "<0.1")
        .to(".Line5 .d5", { width: sizes.Line5.width, height: sizes.Line5.height, duration: 0.7, ease: "power3.out" }, "<0.1")
        .to(".Line6 .d6", { width: sizes.Line6.width, height: sizes.Line6.height, duration: 0.7, ease: "power3.out" }, "<0.1");
    };

    // Run the animation initially
    updateAnimation();

    // Add a resize event listener
    window.addEventListener('resize', updateAnimation);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateAnimation);
    };
  }, []);

  return (
    <div className="SquareAnimations space-y-4">
      <div className="Line1 flex space-x-2">
        <div className="d1 bg-purple-gradient h-3"></div>
        <div className="d1 bg-purple-gradient h-3"></div>
      </div>
      <div className="Line2 flex space-x-2">
        <div className="d2 bg-purple-gradient h-3"></div>
      </div>
      <div className="Line3 flex space-x-2">
        <div className="d3 bg-purple-gradient h-3"></div>
        <div className="d3 bg-purple-gradient h-3"></div>
      </div>
      <div className="Line4 flex space-x-2">
        <div className="d4 bg-purple-gradient h-3"></div>
        <div className="d4 bg-purple-gradient h-3"></div>
      </div>
      <div className="Line5 flex space-x-2">
        <div className="d5 bg-blue-gradient h-3"></div>
      </div>
      <div className="Line6 flex space-x-2">
        <div className="d6 bg-purple-gradient h-3"></div>
      </div>
    </div>
  );
}

export default Animation;
