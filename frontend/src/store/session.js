// import {useDispatch} from 'react-redux';
// const dispatch = useDispatch(); // only needed in component files?
import { csrfFetch } from './csrf';

//action creators
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
    //user is being passed in on the frontend from form data or something
    return {
        type: SET_USER,
        payload: user
    }
};

const removeUser = () => {
    return {
        type: REMOVE_USER
    }
};

//call the API to login, then set session user from response
export const login = (user) => async (dispatch) => {
    const {credential, password} = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential, password
        })
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
}

//sign up using API route
export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();

    dispatch(setUser(data.user));
    return response;
};


//restore user from session info--dispatched in src/App.js
export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    
    return response;
};

//remove session user by clearing token cookie
export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
  };

//by default, no session user in session slice of state
const initialState = { user: null };

export const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
}
