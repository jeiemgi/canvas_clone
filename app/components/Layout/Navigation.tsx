import React from 'react';
import {CanvasLogo} from "~/svg";
import {Link} from "@remix-run/react"
import {useScrollPosition} from "~/hooks";
import clsx from "clsx";

function Navigation() {

    const scrollY = useScrollPosition();
    const isScrolled = scrollY > 0;

    return (
        <nav
            className={clsx(
                isScrolled ? 'bg-white' : 'bg-transparent',
                'transition-colors md:bg-transparent z-50 fixed py-5 px-4 md:py-8 md:px-8 flex w-full justify-between'
            )}>
            <div className={'md:hidden'}>
                <CanvasLogo fill={isScrolled ? "#000" : "#fff"}/>
            </div>
            <ul>
                <li className={clsx(
                    isScrolled ? 'text-black' : 'text-white',
                    'md:text-white', 'md:text-white heading--3'
                )}>
                    <Link to={"contact"}>
                        (Contact)
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;