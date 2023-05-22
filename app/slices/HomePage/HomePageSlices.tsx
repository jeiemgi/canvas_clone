import HomePageHero from "~/slices/HomePage/HomePageHero";
import HomePageQuote from "~/slices/HomePage/HomePageQuote";
import HomePageProject from "~/slices/HomePage/HomePageProject";
import HomePageCapabilities from "~/slices/HomePage/HomePageCapabilities";
import HomePagePortfolio from "~/slices/HomePage/HomePagePortfolio";
import background from "public/img/home-background.png";

function HomePageSlices() {
    return (
        <>
            <div
                className={'w-full bg-contain bg-repeat-y bg-black'}
                style={{backgroundImage: `url('${background}')`}}
            >
                <HomePageHero/>
                <HomePageQuote/>
            </div>
            <HomePageProject/>
            <HomePageCapabilities/>
            <HomePagePortfolio/>
        </>
    );
}

export default HomePageSlices;
