import React from 'react';
import gelatin from "public/img/canvas-gelatin.png"

function HomePageHeroFooter() {
    return (
        <div className={'self-end py-2 w-full flex justify-between border-t border-t-white'}>
            <div>
                <h2 className={'heading--2 text-white'}>DESIGN, MOTION,</h2>
                <h2 className={'heading--2 text-white'}>& <div className="inline-block w-24"/>DEVELOPMENT STUDIO</h2>
            </div>
            <div>
                <h2 className={'heading--2 text-white'}>PROPERLY BALANCE</h2>
                <h2 className={'heading--2 text-white'}>FOR <div className="inline-block w-10"/> FEELING & FUNCTION</h2>
            </div>
            <div>
                <h2 className={'heading--2 text-white'}>2012—2023</h2>
            </div>
        </div>
    )
}

function HomePageHero() {
    return (
        <section className={'w-full flex flex-col h-screen px-[30px]'}>
            <div className={'h-full w-full flex items-center justify-center'}>
                <div className={'w-80 h-80'}>
                    <img className={'object-contain'} src={gelatin} alt=""/>
                </div>
            </div>
            <HomePageHeroFooter/>
        </section>
    );
}

export default HomePageHero;