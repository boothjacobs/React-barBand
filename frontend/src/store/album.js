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
        const albums = await res.json();
        // console.log(albums);
        dispatch(setAlbums(albums));
    } else {
        console.log(res.statusText);
    }
};

export const getAlbumPage = (albumId) => async (dispatch) => {
    const res = await fetch(`/api/albums/${albumId}`);
    if (res.ok) {
        const album = await res.json();
        console.log("inside getAlbumPage", album)
        dispatch(oneAlbum(album))
    } else {
        console.log(res);
    }
};

const initialState = {};

//Reducer
const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUMS:
            const newState = { ...state };
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
