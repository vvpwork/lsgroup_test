import axios from '../../helper/axios';
import {
  loginRequest,
  loginSuccess,
  registrationRequest,
  registrationSuccess,
  logOut,
} from './loginSlice';
import { getUserSuccess, resetUser } from '../user/userSlice';
import { commentInit, resetComment } from '../comment/commentSlice';
import { error } from '../error/errorSlice';

export const loginAsync = user => dispatch => {
  dispatch(loginRequest());
  axios()
    .post('/login', { ...user })
    .then(({ data }) => {
      const { comment, ...user } = data.user;

      dispatch(
        loginSuccess({
          isAuthenticated: data.isAuthenticated,
          token: data.token,
          id: user._id,
        }),
      );
      dispatch(getUserSuccess(user));
      dispatch(commentInit(comment));
    })
    .catch(err => dispatch(error(err.message)));
};

export const registrationAsync = user => dispatch => {
  dispatch(registrationRequest());
  axios()
    .post('/user', { ...user })
    .then(({ data }) => {
      const { user, token, isAuthenticated } = data;
      dispatch(
        registrationSuccess({
          isAuthenticated,
          token,
          id: user._id,
        }),
      );
      dispatch(getUserSuccess(user));
    })
    .catch(err => dispatch(error(err.message)));
};

export const logOutAsync = () => dispatch => {
  axios()
    .post('/logout')
    .then(() => {
      dispatch(logOut());
      dispatch(resetUser());
      dispatch(resetComment());
    });
};
