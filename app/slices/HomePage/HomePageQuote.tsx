import React from 'react';
import TextBlur from "~/components/TextBlur";

function HomePageQuote() {
    return (
        <div className={'py-40 overflow-hidden'}>
            <div className="grid-container">
                <div className={'col-span-5'}>
                    <TextBlur>CANVAS IS AN</TextBlur>
                </div>
                <div className={'col-span-7 col-start-2 mb-80'}>
                    <TextBlur>INTERACTIVE DESIGN & DEVELOPMENT STUDIO.</TextBlur>
                </div>

                <div className={'col-span-5 col-start-5'}>
                    <TextBlur>WE CREATE</TextBlur>
                </div>

                <div className={'col-span-7'}>
                    <TextBlur>
                        strategy-focused & design-driven
                        digital experiences.
                    </TextBlur>
                </div>
            </div>
        </div>
    );
}

export default HomePageQuote;