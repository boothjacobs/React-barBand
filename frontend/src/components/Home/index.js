import AboutBarBand from "./AboutBarBand"

const Home = () => {

    return (
        <>
            <div id="home-heading">
                <h3>Welcome to BarBand</h3>
                <p><i>Some things you do for money, and some you do for love, love, love.</i></p>
            </div>
            <div>
                <p>BarBand is a BandCamp clone populated by cover songs. We believe that re-recording a beloved song is an act of devotion.</p>
                <p>Create an account to build a collection of your own and leave comments on your favorite tribute albums.</p>
                <p>Search by song title, recording artist, original artist, or album, or browse by any of those categories.</p>
            </div>
            <div>
                <AboutBarBand />
            </div>
        </>
    )
}

export default Home;
