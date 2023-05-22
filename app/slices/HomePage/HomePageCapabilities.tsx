import React from 'react';
import Table from "~/components/Table/Table";

function HomePageCapabilities() {
    return (
        <div className={'py-40'}>
            <div className="grid-container">
                <div className={'col-span-12 border-b border-b-black mb-5'}>
                    <h1 className={'display--1'}>CAPABILITIES</h1>
                </div>
            </div>
            <div className="grid-container mb-44">
                <div className="col-span-3">
                    <h2 className={'heading--2'}>01</h2>
                </div>
                <div className="col-span-3">
                    <h2 className={'heading--2'}>02</h2>
                </div>
                <div className="col-span-3">
                    <h2 className={'heading--2'}>03</h2>
                </div>
            </div>
            <div className="grid-container">
                <div className="col-span-12">
                    <Table/>
                </div>
            </div>
        </div>
    );
}

export default HomePageCapabilities;