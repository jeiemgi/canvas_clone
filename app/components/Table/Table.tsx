import React from 'react';

interface Props {
    data?: Array<{
        title: string,
        rows: string[][]
    }>
}

const SAMPLE_DATA = {
    headers: [
        {
            title: 'STRATEGY',
            description: "We are a strategy driven studio. We focus on the “why”, giving insight into everything we do."
        },
        {
            title: 'DESIGN',
            description: "We are a strategy driven studio. We focus on the “why”, giving insight into everything we do."
        },
        {
            title: 'DEVELOPMENT',
            description: "We are a strategy driven studio. We focus on the “why”, giving insight into everything we do."
        },

    ],
    rows: [
        ["STRATEGY", "DESIGN ", "DEVELOPMENT"],
        ["STRATEGY", "DESIGN ", "DEVELOPMENT"],
        ["STRATEGY", "DESIGN ", "DEVELOPMENT"],
        ["STRATEGY", "DESIGN ", "DEVELOPMENT"],
        ["STRATEGY", "DESIGN ", "DEVELOPMENT"],
    ]
}

function Table({data = SAMPLE_DATA}: Props) {

    return (
        <>
            <div className={"w-full grid grid-cols-12 gap-[20px] border-b border-b-black"}>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'heading--2 mb-2'}>STRATEGY</h3>
                    <p className={'body--3 mb-2'}>
                        We are a strategy driven studio. We focus on the “why”, giving
                        insight into everything we do.
                    </p>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'heading--2 mb-2'}>DESIGN</h3>
                    <p className={'body--3 mb-2'}>
                        We are a strategy driven studio. We focus on the “why”, giving
                        insight into everything we do.
                    </p>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'heading--2 mb-2'}>DEVELOPMENT</h3>
                    <p className={'body--3 mb-2'}>
                        We are a strategy driven studio. We focus on the “why”, giving
                        insight into everything we do.
                    </p>
                </div>
            </div>

            <div className={"w-full grid grid-cols-12 gap-[20px] border-b border-b-black"}>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>STRATEGY</h3>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>DESIGN</h3>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>DEVELOPMENT</h3>
                </div>
            </div>
            <div className={"w-full grid grid-cols-12 gap-[20px] border-b border-b-black"}>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>STRATEGY</h3>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>DESIGN</h3>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>DEVELOPMENT</h3>
                </div>
            </div>
            <div className={"w-full grid grid-cols-12 gap-[20px] border-b border-b-black"}>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>STRATEGY</h3>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>DESIGN</h3>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>DEVELOPMENT</h3>
                </div>
            </div>
            <div className={"w-full grid grid-cols-12 gap-[20px] border-b border-b-black"}>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>STRATEGY</h3>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>DESIGN</h3>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>DEVELOPMENT</h3>
                </div>
            </div>
            <div className={"w-full grid grid-cols-12 gap-[20px] border-b border-b-black"}>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>STRATEGY</h3>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>DESIGN</h3>
                </div>
                <div className={"col-span-3 text-left w-full"}>
                    <h3 className={'body--3 my-1'}>DEVELOPMENT</h3>
                </div>
            </div>
        </>
    )
}

export default Table;