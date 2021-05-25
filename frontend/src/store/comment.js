//comment component renders from the album page--where does the API
//call happen?
import { csrfFetch } from './csrf';

const LOAD = 'comments/LOAD_COMMENTS';
const ADD_COMMENT = 'comments/ADD_COMMENT';

const loadComments = (comments) => ({
    type: LOAD,
    payload: comments
});

const setComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
});

export const getComments = (albumId) => async (dispatch) => {
    const response = await fetch(`/api/albums/${albumId}/comments`);
    const comments = await response.json();
    dispatch(loadComments(comments));
};

//WHAT IS GOING ON WITH THESE VARIABLE NAMES? WHO IS 'COMMENT'?
export const postComment = (albumId, comment) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${albumId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({comment})
    });
    const body = await response.json();
    dispatch(setComment(body));
    return comment;
}

const initialState = {};

//Reducer
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            const newState = {...state};
            newState[action.comment?.id] = action.comment;
            return newState;
        }
        case LOAD: {
            const allComments = {...state};
            allComments[action.comments?.id] = action.comment;
            return allComments;
        }
        default:
            return state;
    }
};

export default commentReducer;
