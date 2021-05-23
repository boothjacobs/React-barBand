import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAlbumPage } from "../../store/album";
import './AlbumPage.css';

const AlbumPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const records = useSelector((state) => state.albums);
    const album = records[id];
    console.log(id, "album page component", album);

    useEffect(() => {
        dispatch(getAlbumPage(id))
    }, [dispatch, id]);

    return (
        <div id="album-page">
            <h1 id="album-page-title">{album.title}</h1>
            <div id="album-page-text">
                <div id="music-player"></div>
                <div id="album-page-details">
                    <ol>
                        <li>Track Name</li>
                        <li>Track Name</li>
                        <li>Track Name</li>
                        {/* album.songs.forEach((song) => {
                            return (
                                <li key={song.id}>{song.title} by {song.originalArtist}: {song.artistId}</li>
                            )
                        }) */}
                        <p>{album.description}</p>
                    </ol>
                </div>
            </div>
            <div id="album-page-right">
                <img id="album-lg" src={album.imgUrl} alt="album cover"/>
                <div id="comments">
                    {/* album.comments.forEach((comment) => {
                        <Comment />
                    }) */}
                </div>
            </div>
        </div>
    )
}

export default AlbumPage;
