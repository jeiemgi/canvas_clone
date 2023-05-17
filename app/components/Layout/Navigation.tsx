import React from 'react';
import {Link} from "@remix-run/react"

function Navigation() {
    return (
        <nav className={'fixed py-8 px-8 flex w-full justify-end'}>
            <ul>
                <li className={'text-white heading--3'}>
                    <Link to={"contact"}>
                        (Contact)
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;