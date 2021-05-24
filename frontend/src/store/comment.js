//comment component renders from the album page--where does the API
//call happen?
import { csrfFetch } from './csrf';

const ADD_COMMENT = 'comments/ADD_COMMENT';

const setComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
});

export const postComment = (albumId, comment) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${albumId}/comments`, {
        method: 'POST',
        body: JSON.stringify({comment})
    });
    const data = await response.json();
    dispatchEvent(setComment(data));
    return response;
}

const initialState = {};

//Reducer
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            const newState = {...state};
            newState[action.comment.id] = action.comment;
            return newState;
        }
        default:
            return state;
    }
};

export default commentReducer;
