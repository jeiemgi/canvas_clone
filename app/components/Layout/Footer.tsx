import React from 'react';
import TextBlur from "~/components/TextBlur";

function Footer(props) {
    return (
        <footer className={'relative bg-black text-white'}>
            <div className={"grid-container relative pt-20 mb-40"}>
                <div className="col-span-6 body--1">
                    If you are curious about some of our process or are interested in the details, we document much of
                    what we do in Notion. We leave some of it public for those interested.
                </div>
                <div className="col-span-4 col-start-9 text-right">
                    <h1 className={'heading--1'}>
                        (Let's Chat)
                    </h1>
                </div>
            </div>

            <div className={"grid-container relative"}>
                <div className="col-span-2 border-opacity-20 border-white border-t border-l pl-3 pt-3">
                    <h3 className={'label--2 mb-5'}>DOCUMENTATION</h3>

                    <ul className={'body--3 pb-[400px]'}>
                        <li>Development</li>
                        <li>Design</li>
                        <li>Process</li>
                    </ul>
                </div>
                <div className="col-span-2 border-opacity-20 border-white border-t border-l pl-3 pt-3">
                    <h3 className={'label--2 mb-5'}>DOCUMENTATION</h3>

                    <ul className={'body--3 pb-[400px]'}>
                        <li>Development</li>
                        <li>Design</li>
                        <li>Process</li>
                    </ul>
                </div>
                <div className="col-span-2 border-opacity-20 border-white border-t border-l pl-3 pt-3">
                    <h3 className={'label--2 mb-5'}>DOCUMENTATION</h3>

                    <ul className={'body--3 pb-[400px]'}>
                        <li>Development</li>
                        <li>Design</li>
                        <li>Process</li>
                    </ul>
                </div>
            </div>

            <div className={"grid-container absolute bottom-0"}>
                <div className="col-span-5">
                    <TextBlur>PROPERLY </TextBlur>
                </div>

                <div className="col-span-5 col-start-8">
                    <TextBlur>BALANCED</TextBlur>
                </div>

                <div className="col-span-5 col-start-6">
                    <TextBlur>FOR FEELING &</TextBlur>
                </div>

                <div className="col-span-5 col-start-6">
                    <TextBlur>FUNCTION</TextBlur>
                </div>
            </div>
        </footer>
    );
}

export default Footer;