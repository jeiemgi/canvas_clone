import React from 'react';
import HomePageHero from "~/slices/HomePage/HomePageHero";
import HomePageQuote from "~/slices/HomePage/HomePageQuote";
import HomePageProject from "~/slices/HomePage/HomePageProject";
import HomePageCapabilities from "~/slices/HomePage/HomePageCapabilities";
import background from "public/img/home-background.png";

function HomePageSlices(props) {
    // TODO: get the data and a switch for the slice type.
    return (
        <div className={'w-full bg-cover bg-fixed'} style={{backgroundImage: `url('${background}')`}}>
            <HomePageHero/>
            <HomePageQuote/>
            <HomePageProject/>
            <HomePageCapabilities/>
        </div>
    );
}

export default HomePageSlices;
