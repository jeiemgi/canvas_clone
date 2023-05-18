import React from 'react';
import Table from "~/components/Table/Table";

function HomePageCapabilities(props) {
    return (
        <div className={'bg-white'}>
            <div className="grid-container">
                <div className={'col-span-12 border-b border-b-black'}>
                    <h1 className={'display--1'}>CAPABILITIES</h1>
                </div>
                <div className="col-span-12 mt-10">
                    <Table/>
                </div>
            </div>
        </div>
    );
}

export default HomePageCapabilities;