//comment component renders from the album page--where does the API
//call happen?
import { csrfFetch } from './csrf';

const LOAD = 'comments/LOAD_COMMENTS';
const ADD_COMMENT = 'comments/ADD_COMMENT';
const DELETE = 'comments/DELETE'

const loadComments = (comments) => ({
    type: LOAD,
    payload: comments
});

const setComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
});

const deleteComm = (comment) => ({
    type: DELETE,
    payload: comment
})

export const getComments = (albumId) => async (dispatch) => {
    const response = await fetch(`/api/albums/${albumId}/comments`);
    const comments = await response.json();
    dispatch(loadComments(comments));
};

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
};

export const editComment = (albumId, commentId, body) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${albumId}/comments/${commentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({body})
    });
    const comment = await response.json();
    dispatch(setComment(comment));
    // console.log("COMMENT STORE EDIT THUNK", comment)
    return comment;
};

export const deleteComment = (albumId, commentId) => async (dispatch) => {
    const response = await csrfFetch(`/api/albums/${albumId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const done = await response.json();
    dispatch(deleteComm(done));
    return done;
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
        case DELETE: {
            const lessComments = {...state};
            delete lessComments[action.done];
            return lessComments;
        }
        default:
            return state;
    }
};

export default commentReducer;
