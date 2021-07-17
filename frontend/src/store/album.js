import { csrfFetch } from "./csrf";

//Define action types
const SET_ALBUMS = 'albums/SET_ALBUMS';
const ONE_ALBUM = 'albums/ONE_ALBUM';

//Define action creators
const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    albums //payload
});

const oneAlbum = (album) => ({
    type: ONE_ALBUM,
    album //payload
});

//THUNKS
export const getAlbums = () => async (dispatch) => {
    const res = await fetch("/api/albums");
    if (res.ok) {
        const recordings = await res.json();
        dispatch(setAlbums(recordings));
    } else {
        console.log(res.statusText);
    }
};

export const getAlbumPage = (albumId) => async (dispatch) => {
    const res = await fetch(`/api/albums/${albumId}`);
    if (res.ok) {
        const album = await res.json();
        dispatch(oneAlbum(album))
    } else {
        console.log(res);
    }
};

//SEARCH
export const searchAlbums = (searchTerm, searchBy) => async (dispatch) => {

    const res = await csrfFetch("/api/search", {
        method: 'POST',
        body: JSON.stringify({searchTerm, searchBy})
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(setAlbums(data));
    } else {
        console.log(res.statusText)
    }
}

const initialState = {};

//Reducer
const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            const newState = { };
            action.albums.forEach((album) => {
                newState[album.id] = album;
            })
            return newState;
        case ONE_ALBUM:
            const individualState = {...state};
            individualState[action.album.id] = action.album;
            return individualState;
        default:
            return state;
    }
};

export default albumReducer;






