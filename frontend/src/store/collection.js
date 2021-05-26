import { csrfFetch } from './csrf';

const SET_COLLECTION = 'collection/GET_COLLECTION';
const ADD_COLLECT = 'collection/ADD_COLLECT';
const DELETE = 'collection/DELETE';

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
        collectionId
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

export const deleteCollection = (userId, albumId, collectionId) => async (dispatch) => {
    const collectionRelationship = { userId, albumId };

    const response = await csrfFetch("/api/collection", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({collectionRelationship})
    });
    const deletedCollection = await response.json();
    dispatch(deleteCollect(collectionId));
};

const initialState = [];

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLLECTION:
            const newCollect = {...state};
            action.payload.forEach((collection) => {
                newCollect[collection.id] = collection;
            })
            return newCollect;
        case ADD_COLLECT:
            const plusCollect = {...state};
            plusCollect[action.collection.id] = action.collection;
            return plusCollect;
        case DELETE:
            const lessState = {...state};
            delete lessState[action.collectionId];
            return lessState;
        default:
            return state;
    }
};

export default collectionReducer;
