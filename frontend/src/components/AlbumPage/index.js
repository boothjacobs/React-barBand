import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getAlbumPage, getAlbums } from "../../store/album";
import './AlbumPage.css';
import Comment from "../Comment";
import CommentForm from "../CommentBox";

const AlbumPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const records = useSelector((state) => state.albums);
    const album = records[id];
    // console.log("album component", album);
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getAlbumPage(id))
    }, [dispatch, id]);

    let revealForm;
    const revealComment = (e) => {
        revealForm = (
            <CommentForm />
        )
    }

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
                { sessionUser ? (
                    <>
                        <div id="album-page-comment-form">
                        <button type="button" onClick={revealComment}>Why do you love this album?</button>
                            {revealForm}
                        </div>
                    </>

                ) : null }

                <div id="comments">
                    {album?.Comments?.map((comment) => {
                            return (
                                <div key={comment.id}>
                                    <Comment album={album} comment={comment} user={comment.User} />
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

export default AlbumPage;
