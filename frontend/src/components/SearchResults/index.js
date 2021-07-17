import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import { getAlbums } from "../../store/album";
import "./search.css";

const SearchResults = () => {
    const dispatch = useDispatch();
    const albums = useSelector((state) => Object.values(state.albums));

    // no useEffect because i don't want to re-get albums since the redirect

    if (albums[0]?.description) {
        return (
            <div className="result-list">
                {albums.map((album) => <div className="list-album-info" key={album.id}>
                        <Link to={`/api/albums/${album.id}`}>
                            <img className="list-img" src={album.imgUrl} alt="album cover" />
                        </Link>
                        <div className="list-text">
                            <h3>{album.title}</h3>
                            <p>{album.description}</p>
                        </div>
                    </div>)}
            </div>
        )
    } else if (albums[0]?.originalArtist) {
        console.log(albums[0])
        return (
            <div className="result-list">
                {albums.map((song) => <div className="list-song-info" key={song.id}>
                        <div className="list-text">
                            <h3>{song.title}</h3>
                            <p>{song.Artist.name}</p>
                            <p>Originally recorded by {song.originalArtist}</p>
                            Appears On <Link to={`/api/albums/${song.albumId}`}>{song.Album.title}</Link>
                        </div>
                    </div>)}
            </div>
        )
    } else if (albums[0]?.location) {
        return (
            <div className="result-list">
                {albums.map((artist) => <div className="list-artist-info" key={artist.id}>
                        <div className="list-text">
                            <h3>{artist.name}</h3>
                            <p>{artist.location}</p>
                        </div>
                    </div>)}
            </div>
        )
    } else {
        return (
            <h3>Nothing yet!</h3>
        )
    }

}

export default SearchResults;
