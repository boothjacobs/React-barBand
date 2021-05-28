import {useEffect, useState} from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {searchAlbums, getAlbums} from "../../store/album";
import './Navigation.css';


const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const albums = useSelector((state) => Object.values(state.albums));

    const [searchTerm, setSearchTerm] = useState("");
    const [searchBy, setSearchBy] = useState("");

    useEffect(() => {
        dispatch(getAlbums())
    }, [dispatch]);

    const searchSubmit = async (e) => {
        e.preventDefault();
        let searchResult = await dispatch(searchAlbums(searchTerm, searchBy));
        history.push("/search-results");
    };

    return (
        <div id="search-bar">
            <form onSubmit={searchSubmit} >
                {/* <div className="search-bar-item"> */}
                    <input type="search" name="search-term" id="search-input"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder="Search and discover music" size="25"/>
                {/* </div> */}

                {/* <div className="search-bar-item"> */}
                    <select name="search-by" onChange={e => setSearchBy(e.target.value)}>
                        <option value="null">--Select to Browse--</option>
                        <option value="original-artist">Original Artist</option>
                        <option value="artist">Recording Artist</option>
                        <option value="song">Song</option>
                        <option value="album">Album</option>
                    </select>
                {/* </div> */}
                {/* <div className="search-bar-item"> */}
                    <button>Go</button>
                {/* </div> */}
            </form>
        </div>

    )
}

export default SearchBar;
