import React from 'react'
import memo2014 from '../../assets/docs/Memoria2014CAPIBARANDS.pdf'
import memo2015 from '../../assets/docs/Memoria2015CAPIBARANDS.pdf'
import memo2016 from '../../assets/docs/Memoria2016CAPIBARANDS.pdf'
import memo2017 from '../../assets/docs/Memoria2017CAPIBARANDS.pdf'
import memo2018 from '../../assets/docs/Memoria2018CAPIBARANDS.pdf'
import memo2019 from '../../assets/docs/Memoria2019CAPIBARANDS.pdf'

export const Memorias = () => {
    return (
        <div className="container memorias">
            <h4>Memorias de <span>Capibara</span></h4>
            <ul className="list-group m-4">
                <li>
                    <a className="list-group-item-success list-group-item list-group-item-action" download="Memoria CAPIBARA 2014" href={memo2014}>Descarga la memoria 2014</a>
                </li>
                <li>
                    <a className="list-group-item-success list-group-item list-group-item-action" download="Memoria CAPIBARA 2014" href={memo2015}>Descarga la memoria 2015</a>
                </li>
                <li>
                    <a className="list-group-item-success list-group-item list-group-item-action" download="Memoria CAPIBARA 2014" href={memo2016}>Descarga la memoria 2016</a>
                </li>
                <li>
                    <a className="list-group-item-success list-group-item list-group-item-action" download="Memoria CAPIBARA 2014" href={memo2017}>Descarga la memoria 2017</a>
                </li>
                <li>
                    <a className="list-group-item-success list-group-item list-group-item-action" download="Memoria CAPIBARA 2014" href={memo2018}>Descarga la memoria 2018</a>
                </li>
                <li>
                    <a className="list-group-item-success list-group-item list-group-item-action" download="Memoria CAPIBARA 2014" href={memo2019}>Descarga la memoria 2019</a>
                </li>
            </ul>

        </div>
    )
}
