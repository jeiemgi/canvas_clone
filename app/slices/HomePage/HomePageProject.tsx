import React from 'react';
import aliveSample from "public/img/sample/alive-bg.png"

function HomePageProject() {
    return (
        <div className={'w-full h-screen bg-cover flex flex-col justify-between relative'}
             style={{backgroundImage: `url('${aliveSample}')`}}>
            <div className="grid-container">
                <div className={'col-span-3 flex pt-8 justify-between'}>
                    <h3 className={'text-white heading--3'}> ALIVE <br/> CASE STUDY</h3>
                    <h3 className={'text-white heading--3'}> 1 / 5</h3>
                </div>
            </div>

            <div className="grid-container">
                <div className="col-span-5 self-end py-8">
                    <h3 className={'text-white heading--3'}> branding, app, Website</h3>
                </div>
            </div>
            <div className="grid-container absolute h-[500px] bottom-0 overflow-hidden">
                <div className={'col-span-4 col-start-8'}>
                    <p className={'text-white body--2 mb-5'}>
                        A description of the project. Maybe one to two sentences. More
                        content goes here. Think it will be two to three lines.
                    </p>
                    <div className={'w-full h-[300px] bg-grey mb-5'}></div>
                    <div className={'w-full h-[300px] bg-grey mb-5'}></div>
                    <div className={'w-full h-[300px] bg-grey mb-5'}></div>
                </div>
            </div>
        </div>
    );
}

export default HomePageProject;