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
    const collection = await response.json();
    // console.log(data)
    dispatch(getCollect(collection))
}

const initialState = { collection: null };

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COLLECTION:
            const newCollect = {...state};
            newCollect[action.collection.id] = action.collection;
            return newCollect;
        default:
            return state;
    }

};

export default collectionReducer;
