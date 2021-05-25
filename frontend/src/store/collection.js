import { csrfFetch } from './csrf';
import { useDispatch } from 'react-redux';

const SET_COLLECTION = 'collection/GET_COLLECTION';

const setCollect = (collections) => {
    return {
        type: SET_COLLECTION,
        payload: collections
    }
};

//thunk
export const getCollection = (userId) => async (dispatch) => {
    const response = await fetch(`${userId}`);
    const collections = await response.json();
    console.log("COLLECTION STORE:", collections)
    dispatch(setCollect(collections))
};

export const countCollections = (albumId) => async (dispatch) => {
    const response = await fetch("/collection-count");
    const otherCollections = await response.json();
    
}

const initialState = [];

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLLECTION:
            const newCollect = {...state, ...action.payload};
            // action.payload.forEach((collection) => {
            //     newCollect[collection.id] = collection;
            // })
            return newCollect;
        default:
            return state;
    }
};

export default collectionReducer;
