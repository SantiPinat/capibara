import React from 'react'
import { AppRouter } from './components/router/AppRouter'
import { useSpring , animated } from 'react-spring';

export const CapibaraApp = () => {

    
    const fade = useSpring({
        from: { opacity : 0},
        opacity: 1,
        config: {delay: 2000, duration: 2000}
      });
    
      
    return (
        <animated.div style={fade} >
            <AppRouter/>
        </animated.div>
    )
}
