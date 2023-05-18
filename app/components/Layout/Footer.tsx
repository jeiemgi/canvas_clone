import React from 'react';

function Footer(props) {
    return (
        <footer className={'bg-black text-white'}>
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

            <div className={"grid-container relative mb-10"}>
                <div className="col-span-2 body--3 border-l border-t pl-2 pt-2">
                    <h3 className={'label--2 mb-5'}>DOCUMENTATION</h3>

                    <ul>
                        <li>Development</li>
                        <li>Design</li>
                        <li>Process</li>
                    </ul>
                </div>
                <div className="col-span-2 body--3">
                    <h3 className={'label--2 mb-5'}>DOCUMENTATION</h3>

                    <ul>
                        <li>Development</li>
                        <li>Design</li>
                        <li>Process</li>
                    </ul>
                </div>
                <div className="col-span-2 body--3">
                    <h3 className={'label--2 mb-5'}>DOCUMENTATION</h3>

                    <ul>
                        <li>Development</li>
                        <li>Design</li>
                        <li>Process</li>
                    </ul>
                </div>
            </div>

            <div className={"grid-container relative"}>
                <div className="col-span-5 display--2 blur-sm">
                    PROPERLY
                </div>

                <div className="text-right col-span-5 col-start-8 display--2 blur-sm">
                    BALANCED
                </div>

                <div className="text-right col-span-5 col-start-6 display--2 blur-sm">
                    FOR FEELING &
                </div>

                <div className="text-right col-span-5 col-start-6 display--2 blur-sm">
                    FUNCTION
                </div>
            </div>
        </footer>
    );
}

export default Footer;