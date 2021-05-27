import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {searchAlbums} from "../../store/album";
import './Navigation.css';


const SearchBar = () => {
    const dispatch = useDispatch();

    const searchSubmit = async (e) => {
        e.preventDefault();
        await dispatch(searchAlbums());
    };

    return (
        <form onSubmit={e => searchSubmit()} >
            <input type="search" name="search-term" id="search-input" placeholder="Search and discover music" size="25"/>
            <select name="search-by">
                <option value="original-artist" selected>Original Artist</option>
                <option value="artist">Recording Artist</option>
                <option value="song">Song</option>
                <option value="album">Album</option>
            </select>
            <button>Go</button>
        </form>
    )
}

export default SearchBar;
