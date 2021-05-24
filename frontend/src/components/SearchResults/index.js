import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import { getAlbums } from "../../store/album";

const SearchResults = () => {
    const dispatch = useDispatch();
    const albums = useSelector((state) => Object.values(state.albums));

    useEffect(() => {
        dispatch(getAlbums())
    }, [dispatch]);

    return (
        <div className="album-list">
            {albums.map((album) => <div className="list-album-info" key={album.id}>
                    <Link to={`/api/albums/${album.id}`}>
                         <img className="list-img" src={album.imgUrl} alt="album cover" />
                    </Link>
                    <div className="list-album-text">
                        <h3>{album.title}</h3>
                        <p>{album.description}</p>
                    </div>
                </div>)}
        </div>
    )
}

export default SearchResults;
