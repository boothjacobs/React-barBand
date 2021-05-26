//renders below "user profile"
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getCollection } from "../../store/collection";
import OtherCollections from "./OtherCollections";

import './CollectionPage.css';

const CollectionPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const records = useSelector((state) => Object.values(state.collection));
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getCollection(id))
    }, [dispatch, id]);

    console.log("****CollectionPage Component*****", id, sessionUser)
    return (
        <>
            <div id="user-profile">
                <img id="profile-image" alt="user" src={sessionUser.profileImage} />
                <h1>{sessionUser?.username}</h1>
            </div>
            <div id="collection">
                    {records?.map((album) => <div className="collection-album-display" key={album.Album.id}>
                            <Link to={`/api/albums/${album.Album.id}`}>
                                <img className="list-img" src={album.Album.imgUrl} alt="album cover" />
                                <h4>{album.Album.title}</h4>
                            </Link>
                            {/* <OtherCollections albumId={album.Album.id} /> */}
                        </div>)}
            </div>
        </>

    );
}

export default CollectionPage;
