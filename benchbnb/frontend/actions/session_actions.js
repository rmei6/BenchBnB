import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERROR';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const login = (user) => {
    return (dispatch) => {
        return ApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(err => dispatch(receiveErrors(err.responseJSON)));
    };
};

export const logout = () => {
    return dispatch => {
        return ApiUtil.logout()
        .then(dispatch(logoutCurrentUser()))
        .fail(err => dispatch(receiveErrors(err.responseJSON)));
    };
};

export const signup = (user) => {
    return dispatch => {
        return ApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(err => dispatch(receiveErrors(err)));
    };
};