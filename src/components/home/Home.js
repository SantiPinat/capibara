import React from 'react'
import { Convenios } from '../convenios/Convenios'
import { Carrusel } from '../carrusel/Carrusel'
import { Historia } from '../historia/Historia'
import { Noticias } from '../noticias/noticias'
import { Bertacaceres } from '../instituto/Bertacaceres'

export const Home = () => {
    return (
        <main>
            <Carrusel/>
            <Historia/>
            <Bertacaceres/>
            <Convenios/>
            <Noticias/>
        </main>
    )
}
