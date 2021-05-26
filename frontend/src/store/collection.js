import { csrfFetch } from './csrf';

const SET_COLLECTION = 'collection/GET_COLLECTION';
const ADD_COLLECT = 'collection/ADD_COLLECT';
const COUNT = 'collection/COUNT';

const setCollect = (collections) => {
    return {
        type: SET_COLLECTION,
        payload: collections
    }
};

const addCollect = (newCollect) => {
    return {
        type: ADD_COLLECT,
        collection: newCollect
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
    const response = await fetch(`/api/users/${userId}`); //Is this working?
    const collections = await response.json();

    console.log("COLLECTION STORE:", collections)

    dispatch(setCollect(collections))
};

export const addCollection = (userId, albumId) => async (dispatch) => {
    const collectionRelationship = { userId, albumId };

    console.log("store add collection pre-fetch", collectionRelationship)

    const response = await csrfFetch("/api/collection", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(collectionRelationship)
    });
    const newCollection = await response.json();

    console.log("store Add Collection", newCollection)

    dispatch(addCollect(newCollection));
};

//BROKEN THUNK
export const countCollections = (albumId) => async (dispatch) => {
    const response = await fetch("/api/collection/count");
    const otherCollections = await response.json();

    dispatch(countCollect(otherCollections));
};

const initialState = [];

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLLECTION:
            // console.log("inside reducer", action.payload)
            const newCollect = {...state, ...action.payload};
            // action.payload.forEach((collection) => {
            //     newCollect[collection.id] = collection;
            // })
            return newCollect;
        case ADD_COLLECT:
            const plusCollect = {...state, ...action.collection};
            return plusCollect;
        case COUNT:
            const newState = {...state} //THIS CASE IS BROKEN
            return newState;
        default:
            return state;
    }
};

export default collectionReducer;
