//renders below "user profile"
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';

import { getCollection, deleteCollection } from "../../store/collection";
import OtherCollections from "./OtherCollections";

import './CollectionPage.css';

const CollectionPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const records = useSelector((state) => Object.values(state.collection));
    // const sessionUser = useSelector(state => state.session.user);

    const history = useHistory();
    useEffect(() => {
        dispatch(getCollection(id))
    }, [dispatch, id]);

    const removeButton = async (albumId) => {
        await dispatch(deleteCollection(+id, albumId));
        history.push("/");
        history.goBack();
    };

    // console.log("****CollectionPage Component*****", id)
    return (
        <>
            <div id="collection">
                    {records?.map((album) => <div className="collection-album-display" key={album?.Album?.id}>
                            <Link to={`/api/albums/${album?.Album?.id}`}>
                                <div>
                                    <img className="list-img" src={album?.Album?.imgUrl} alt="album cover" />
                                </div>
                                <div>
                                    <h4>{album?.Album?.title}</h4>
                                </div>
                            </Link>
                            <button className="remove-collection" onClick={(e) => removeButton(album?.Album?.id)}>Remove from Collection</button>
                            <OtherCollections albumId={album?.Album?.id} />
                    </div>)}
            </div>
        </>

    );
}

export default CollectionPage;
