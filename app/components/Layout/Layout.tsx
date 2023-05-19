import React from 'react';
import Footer from "~/components/Layout/Footer";
import Navigation from "~/components/Layout/Navigation";

function Layout({children}) {
    return (
        <main>
            <Navigation/>
            <main>
                {children}
            </main>
            <Footer/>
        </main>
    );
}

export default Layout;