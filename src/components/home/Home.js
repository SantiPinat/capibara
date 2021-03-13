import React from 'react'
import { Convenios } from '../convenios/Convenios'
import { Carrusel } from '../carrusel/Carrusel'
import { Historia } from '../historia/Historia'

export const Home = () => {
    return (
        <main>
            <Carrusel/>
            <Historia/>
            <Convenios/>
        </main>
    )
}
