import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
const ReactLogo =()=>{
    const { ref} = useWebAnimations({
        keyframes: {
          transform: ["scale(1.1)"], // Move by 500px
          
        },
        timing: {
          delay: 1000, // Start with a 500ms delay
          duration: 1000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
      });
    return(
        <img ref={ref} className="object-cover object-center rounded" alt="hero" src="https://shahaf-dan.com/Logos/react-logo.png" />
        
    )
}
export default ReactLogo;