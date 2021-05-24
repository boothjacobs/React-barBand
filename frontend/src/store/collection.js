import { csrfFetch } from './csrf';

const GET_COLLECTION = 'collection/GET_COLLECTION';

const getCollect = (collection) => {
    return {
        type: GET_COLLECTION,
        payload: collection
    }
};

//thunk
export const getCollection = (userId) => async (dispatch) => {
    const response = await csrfFetch(`api/users/${userId}`);
    const collections = await response.json();
    console.log(collections)
    // dispatch(getCollect(collections))
}

const initialState = { collection: null };

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COLLECTION:
            const newCollect = {...state};
            newCollect[action.collections.id] = action.collections;
            return newCollect;
        default:
            return state;
    }

};

export default collectionReducer;
