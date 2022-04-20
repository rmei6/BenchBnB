import * as ApiUtil from '../util/_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE__ERROR';

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

export const login = (user) => dispatch => (
    ApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user))), err => dispatch(receiveErrors(err))
);

export const logout = () => dispatch => (
    ApiUtil.logout()
        .then(dispatch(logoutCurrentUser())), err => dispatch(receiveErrors(err))
);

export const signup = (user) => dispatch => (
    ApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user))), err => dispatch(receiveErrors(err))
);