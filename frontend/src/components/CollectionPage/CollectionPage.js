//renders below "user profile"
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCollection } from "../../store/collection";

import './CollectionPage.css';

const CollectionPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const records = useSelector((state) => state.collections);

    console.log("*********", records)

    useEffect(() => {
        dispatch(getCollection(id))
    }, [dispatch, id]);

    return (
        <div id="collection">
            <div className="album-list">
                {/* {albums.map((album) => <div className="list-album-info" key={album.id}>
                        <Link to={`/api/albums/${album.id}`}>
                            <img className="list-img" src={album.imgUrl} alt="album cover" />
                        </Link>
                        <div className="list-album-text">
                            <h3>{album.title}</h3>
                            <p>{album.description}</p>
                        </div>
                    </div>)} */}
            </div>
        </div>
    );
}

export default CollectionPage;
