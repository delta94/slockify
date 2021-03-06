import * as APIUtil from "../util/session_api_util"
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const signup = user => dispatch => {
  return APIUtil.signup(user)
    .then( res => dispatch(receiveCurrentUser(res)))
    .fail(res => dispatch(receiveErrors(res.responseJSON)))
};

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail(res => dispatch(receiveErrors(res.responseJSON)))
);

export const login = (user) => dispatch => (
  APIUtil.login(user)
    .then(res => dispatch(receiveCurrentUser(res)))
    .fail(res => dispatch(receiveErrors(res.responseJSON)))
);
  
