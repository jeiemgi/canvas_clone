import React from 'react';
import Footer from "~/components/Layout/Footer";
import Navigation from "~/components/Layout/Navigation";

function Layout({children}) {
    return (
        <main>
            <Navigation/>
            <main className={'pb-10'}>
                {children}
            </main>
            <Footer/>
        </main>
    );
}

export default Layout;