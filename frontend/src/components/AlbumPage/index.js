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
    const sessionUser = useSelector(state => state.session.user);
    const collection = useSelector((state) => Object.values(state.collection));
    // console.log("album component", collection);

    useEffect(() => {
        dispatch(getAlbumPage(id))
    }, [dispatch, id]);

    // console.log("this album id", typeof id)
    // collection.forEach((collection) => console.log("for eaching", collection.albumId))
    const ownThis = collection.find(collect => collect.albumId === +id
    );

    return (
        <div id="album-page">
            <h1 id="album-page-title">{album?.title}</h1>
            <div id="album-page-text">
                <div id="music-player"></div>
                { ownThis ? (<p>❤️ You own this</p>) : (<Link>Add to Collection</Link>) }
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
                            <CommentForm />
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
