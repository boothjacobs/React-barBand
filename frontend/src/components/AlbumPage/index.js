import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAlbumPage } from "../../store/album";

const AlbumPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const album = useSelector((state) => state.album);
    console.log(id, "album page component", album);

    useEffect(() => {
        dispatch(getAlbumPage(id))
    }, [dispatch, id]);

    return (
        <div id="album-page">
            {/* <h1>{album.title}</h1> */}
        </div>
    )
}

export default AlbumPage;
