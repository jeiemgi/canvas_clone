import React from 'react';

function HomePageQuote() {
    return (
        <div className={'py-40 overflow-hidden'}>
            <div className="grid-container">
                <div className={'col-span-5'}>
                    <h1 className={'display--2 text-white'}>CANVAS IS AN</h1>
                </div>
                <div className={'col-span-7 col-start-2 mb-80'}>
                    <h1 className={'display--2 text-white'}>INTERACTIVE DESIGN & DEVELOPMENT STUDIO.</h1>
                </div>

                <div className={'col-span-5 col-start-5'}>
                    <h1 className={'display--2 text-white'}>WE CREATE</h1>
                </div>

                <div className={'col-span-7'}>
                    <h1 className={'display--2 text-white'}>
                        strategy-focused & design-driven
                        digital experiences.
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default HomePageQuote;