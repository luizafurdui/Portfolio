import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

export const RiveAnimation = () => {
  // Load the Rive file with the correct state machine
  const { rive, RiveComponent } = useRive({
    src: "./icon.riv",  // Make sure your path is correct
    stateMachines: "State Machine 1",  // Adjust the state machine name
    autoplay: true,
  });

  // State for screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set `isMobile` to true if the width is less than 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set the initial state

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  // Access the state machine input "button 3"
  const button3Input = useStateMachineInput(rive, "State Machine 1", "button 3");

  return (
    <div className="App">
      <RiveComponent
        style={{ height: isMobile ? "400px" : "700px", width: isMobile ? "400px" : "700px" }}  // Adjust dimensions based on screen size
        onClick={() => button3Input && button3Input.fire()}  // Fire the button 3 input on click
      />
    </div>
  );
};

export default RiveAnimation;
