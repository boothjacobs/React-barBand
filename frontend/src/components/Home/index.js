import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getAlbums } from "../../store/album";

import SearchResults from "../SearchResults";
import AboutBarBand from "./AboutBarBand";
import "./home.css";

const Home = () => {
    const dispatch = useDispatch();
    const albums = useSelector((state) => Object.values(state.albums));

    return (
        <div id="home-page">
            <div id="home-heading">
                <h2>Welcome to BarBand</h2>
                <p>BarBand is a BandCamp clone populated by cover songs. We believe that re-recording a beloved song is an act of devotion.</p>
                <p>Create an account to build a collection of your own and leave comments on your favorite tribute albums.</p>
                <p>Search by song title, recording artist, original artist, or album, or browse by any of those categories.</p>
            </div>
            <div id="home-text">
                <p><i>Some things you do for money, and some you do for love, love, love.</i></p>
            </div>
            <div className="divider"></div>
            <h4 id="bandcamp-daily-head">BarBand Daily</h4>
            <div id="bandcamp-daily">
                <div className="list-album-info" key={albums[1].id}>
                    <Link to={`/api/albums/${albums[1].id}`}>
                        <img className="list-img" src={albums[1].imgUrl} alt="album cover" />
                    </Link>
                    <div className="list-text">
                        <Link to={`/api/albums/${albums[1].id}`}><h4>{albums[1].title}</h4></Link>
                        <p>{albums[1].description}</p>
                    </div>
                </div>
                {albums.map((album) => <div className="b-daily-list" key={album.id}>
                        <Link to={`/api/albums/${album.id}`}>
                            <img className="list-img" src={album.imgUrl} alt="album cover" />
                            <h5 className="bd-title">{album.title}</h5>
                        </Link>
                    </div>)}
            </div>
            <div id="about">
                <AboutBarBand />
            </div>
        </div>
    )
}

export default Home;
