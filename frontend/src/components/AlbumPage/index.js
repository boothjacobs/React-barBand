import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAlbumPage } from "../../store/album";
import './AlbumPage.css';

const AlbumPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const record = useSelector((state) => state.albums);
    const album = record[1];
    console.log(id, "album page component", album);

    useEffect(() => {
        dispatch(getAlbumPage(id))
    }, [dispatch, id]);

    return (
        <div id="album-page">
            <h1 id="album-page-title">{album.title}</h1>
            <div id="album-page-text">
                <div id="music-player"></div>
                <div id="track-list">
                    <ol>
                        <li>Track Name</li>
                        <li>Track Name</li>
                        <li>Track Name</li>
                        {/* album.songs.forEach((song) => {
                            return (
                                <li key={song.id}>{song.title} by {song.originalArtist}: {song.artistId}</li>
                            )
                        }) */}
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
