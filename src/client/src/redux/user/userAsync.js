import axios from '../../helper/axios';
import { userRequest, updateUser } from './userSlice';
import { error } from '../error/errorSlice';

export const userUpdateAsync = user => (dispatch, getState) => {
  const state = getState();
  const { token, id } = state.login;

  console.log({ id, ...user });
  dispatch(userRequest());
  axios(token)
    .patch('/user', { id, ...user })
    .then(({data}) => {
        dispatch(updateUser(data))
    })
    .catch(err => dispatch(error(err)));
};
