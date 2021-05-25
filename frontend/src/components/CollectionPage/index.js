//renders below "user profile"
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getCollection } from "../../store/collection";

import './CollectionPage.css';

const CollectionPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const records = useSelector((state) => Object.values(state.collection));
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getCollection(id))
    }, [dispatch, id]);

    console.log("****CollectionPage Component*****", id, records)
    return (
        <>
            <div id="user-profile">
                <h1>{sessionUser?.username}'s Collection</h1>
            </div>
            <div id="collection">
                <div className="album-list">
                    {records?.map((album) => <div className="list-album-info" key={album.Album.id}>
                            <Link to={`/api/albums/${album.Album.id}`}>
                                <img className="list-img" src={album.Album.imgUrl} alt="album cover" />
                            </Link>
                            <div className="list-album-text">
                                <h3>{album.Album.title}</h3>
                                <p>{album.Album.description}</p>
                            </div>
                        </div>)}
                </div>
            </div>
        </>

    );
}

export default CollectionPage;
