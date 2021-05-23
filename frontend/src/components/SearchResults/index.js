import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import { getAlbums } from "../../store/album";

const SearchResults = () => {
    const dispatch = useDispatch();
    const albums = useSelector((state) => Object.values(state.albums));
    // console.log("search results component", albums)

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

{/*"Media Object" layout from MDN

    <div class="media">

    <div class="img">
    <img src="balloon-sq2.jpg" alt="Balloons">
</div>

<div class="content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis condimentum.</p>
</div>
<div class="footer">
    An optional footer goes here.
</div>
</div>

<div class="media"></div> */}
