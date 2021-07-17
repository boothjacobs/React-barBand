import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { getAlbumPage } from "../../store/album";
import {addCollection} from "../../store/collection";
import './AlbumPage.css';
import Comment from "../Comment";
import CommentForm from "../Comment/CommentBox";

const AlbumPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const records = useSelector((state) => state.albums);
    const album = records[id];
    const sessionUser = useSelector(state => state.session.user);
    const collection = useSelector((state) => Object.values(state.collection));

    const history = useHistory();
    useEffect(() => {
        dispatch(getAlbumPage(id))
    }, [dispatch, id]);

    const ownThis = collection.find(collect => collect.albumId === +id );

    const addButton = async () => {
        await dispatch(addCollection(sessionUser.id, +id));
        history.push("/");
        history.goBack();
    }

    return (
        <div id="album-page">
            <div id="album-page-text">
                <h1 id="album-page-title">{album?.title}</h1>
                <div id="collection-status">
                    {/* <div id="music-player"></div> */}
                    { ownThis ? (<p>❤️ You own this</p>) : (<button type="button" onClick={e => addButton()}>Add to Collection</button>) }
                </div>
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
