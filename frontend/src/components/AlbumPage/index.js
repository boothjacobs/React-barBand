import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAlbumPage, getAlbums } from "../../store/album";
import './AlbumPage.css';
import Comment from "../Comment";

const AlbumPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const records = useSelector((state) => state.albums);
    const album = records[id];
    // console.log("album component", album);

    useEffect(() => {
        dispatch(getAlbumPage(id))
    }, [dispatch, id]);

    return (
        <div id="album-page">
            <h1 id="album-page-title">{album?.title}</h1>
            <div id="album-page-text">
                <div id="music-player"></div>
                <div id="album-page-details">
                    <ol>
                        {album?.Songs?.map((song) => {
                            return (
                                <li key={song.id}><b>{song.title}</b> <i>by {song.originalArtist}</i>: <b>{song.Artist.name}</b></li>
                            )
                        })}
                        <p>{album?.description}</p>
                    </ol>
                </div>
            </div>
            <div id="album-page-right">
                <img id="album-lg" src={album?.imgUrl} alt="album cover"/>
                <div id="comments">
                    {album?.Comments?.map((comment) => {
                            return (
                                <Comment body={comment.body} user={comment.User} />
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

export default AlbumPage;
