import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export const Noticias = () => {


    return (
        <section className="widgettweet">
            <h2>Ultimas noticias en <a href="https://twitter.com/CapibaraNDS" rel="noopener noreferrer">CAPIBARA</a> </h2>
            <div className="noticias">
                <div className="tweet">
                    <TwitterTimelineEmbed
                    sourceType="capibarands"
                    screenName="capibarands"
                    theme="dark"
                    options={{height: 500}}
                    />
                </div>
            </div>
        </section>
    )
}
