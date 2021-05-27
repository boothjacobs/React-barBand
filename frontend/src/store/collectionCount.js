import { csrfFetch } from './csrf';

const COUNT = 'collection/COUNT';

const countCollect = (collections) => {
    return {
        type: COUNT,
        count: collections
    }
};

//BROKEN THUNK
export const countCollections = (albumId) => async (dispatch) => {

    const response = await csrfFetch("/api/collection/count", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({albumId: albumId})
    });
    const otherCollections = await response.json(); //an object

    dispatch(countCollect(otherCollections));
};

const initialState = [];

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNT:
            const newState = {...state}; 
            newState[action.count.albumId] = action.count.count;
            return newState;
        default:
            return state;
    }
};

export default countReducer;
