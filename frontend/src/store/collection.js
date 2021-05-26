import { csrfFetch } from './csrf';

const SET_COLLECTION = 'collection/GET_COLLECTION';
const ADD_COLLECT = 'collection/ADD_COLLECT';
const DELETE = 'collection/DELETE';
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

const deleteCollect = (collectionId) => {
    return {
        type: DELETE,
        collection: collectionId
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

    dispatch(setCollect(collections))
};

export const addCollection = (userId, albumId) => async (dispatch) => {
    const collectionRelationship = { userId, albumId };

    const response = await csrfFetch("/api/collection", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(collectionRelationship)
    });
    const newCollection = await response.json();

    dispatch(addCollect(newCollection));
};

export const deleteCollection = (collectionId) => async (dispatch) => {
    // const collectionRelationship = { userId, albumId };
    console.log("inside delete thunk", collectionId, typeof collectionId)

    const response = await csrfFetch("/api/collection", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({collectionId})
    });
    const deletedCollection = await response.json();

    dispatch(deleteCollect(deletedCollection));
};

//BROKEN THUNK
export const countCollections = (albumId) => async (dispatch) => {

    //how to pass albumId parameter through fetch?
    const response = await csrfFetch("/api/collection/count", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({albumId: albumId})
    });
    const otherCollections = await response.json();

    dispatch(countCollect(otherCollections));
};

const initialState = [];

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLLECTION:
            const newCollect = {...state, ...action.payload};
            return newCollect;
        case ADD_COLLECT:
            const plusCollect = {...state, ...action.collection};
                // plusCollect[action.collection.id] = action.collection;
            return plusCollect;
        case COUNT:
            const newState = {...state, ...action.count}; //THIS CASE IS BROKEN
            return newState;
        case DELETE:
            const lessState = {...state};
            delete lessState[action.deletedCollection];
            return lessState;
        default:
            return state;
    }
};

export default collectionReducer;
