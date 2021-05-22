//Define action types
const SET_ALBUMS = 'albums/SET_ALBUMS';

//Define action creators
const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    albums
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
}

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
        default:
            return state;
    }
};

export default albumReducer;
