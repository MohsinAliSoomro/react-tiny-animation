import React from 'react';
import useWebAnimations, { zoomIn } from '@wellyshen/use-web-animations';
const Jsx = ({ text }) => {
    const { ref, animate } = useWebAnimations();
    const mouseover = (e) => {
        e.preventDefault()
        animate({ ...zoomIn })
    }
    return (

        <p onMouseMoveCapture={mouseover} ref={ref} class="leading-relaxed text-base">
            {text}
        </p>
    )
}
export default Jsx;

// JavaScript XML. It is a JavaScript syntax extension. 
//         Its an XML or HTML like syntax used by ReactJS. 
//         This syntax is processed into JavaScript calls of React 
//         Framework. It extends the ES6 so that HTML like text can 
//         co-exist with JavaScript react code. It is not necessary 
//         to use JSX, but it is recommended to use in ReactJS.