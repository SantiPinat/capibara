import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export const Noticias = () => {


    return (
        <section className="widgettweet">
            <h2>Últimas noticias en <a href="https://twitter.com/CapibaraNDS" target="_blank" rel="noopener noreferrer">CAPIBARA</a> </h2>
            <div className="noticias">
                <div className="tweet">
                    <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="capibarands"
                    theme="dark"
                    options={{height: 500}}
                    />
                </div>
            </div>
        </section>
    )
}
