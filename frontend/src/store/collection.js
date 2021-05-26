import { csrfFetch } from './csrf';

const SET_COLLECTION = 'collection/GET_COLLECTION';
const COUNT = 'collection/COUNT';

const setCollect = (collections) => {
    return {
        type: SET_COLLECTION,
        payload: collections
    }
};

const countCollect = (count) => {
    return {
        type: COUNT,
        count: count
    }
};

//thunk
export const getCollection = (userId) => async (dispatch) => {
    const response = await fetch(`${userId}`);
    const collections = await response.json();
    // console.log("COLLECTION STORE:", collections)
    dispatch(setCollect(collections))
};

export const countCollections = (albumId) => async (dispatch) => {
    const response = await fetch("/collection/count");
    const otherCollections = await response.json();

    dispatch(countCollect(otherCollections));
};

const initialState = [];

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLLECTION:
            const newCollect = {...state, ...action.payload};
            // action.payload.forEach((collection) => {
            //     newCollect[collection.id] = collection;
            // })
            return newCollect;
        case COUNT:
            const newState = {...state, ...action.count}
        default:
            return state;
    }
};

export default collectionReducer;
