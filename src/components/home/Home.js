import React from 'react'
import { Convenios } from '../convenios/Convenios'
import { Carrusel } from '../carrusel/Carrusel'
import { Historia } from '../historia/Historia'
import { Noticias } from '../noticias/noticias'
import { Bertacaceres } from '../instituto/Bertacaceres'
import { useSpring ,animated } from '@react-spring/web'

export const Home = () => {
    
    const showUp = useSpring({
        from: { opacity : 0, marginLeft: -500},
        opacity: 1, marginLeft: 0,
        config: {delay: 1000, duration: 1000},
        leave: { opacity: 0, marginLeft: -500}

    });

    return (
        <main>
            <animated.div style={showUp}>
                <Carrusel/>
                <Historia/>
                <Bertacaceres/>
                <Noticias/>
            </animated.div>
        </main>
    )
}
