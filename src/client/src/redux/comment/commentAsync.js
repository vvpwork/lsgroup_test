import { commentRequest, addComment, deleteComment } from './commentSlice';
import { error } from '../error/errorSlice';
import axios from '../../helper/axios';

export const addCommentAsync = description => (dispatch, getState) => {
  const state = getState();
  const { id, token } = state.login;
  axios(token)
    .post('/comment', { author: id, description })
    .then(({ data }) => {
      console.log(data);
      dispatch(addComment(data.comment));
    })
    .catch(err => dispatch(error(err.message)));
};

export const deleteCommentAsync = id => (dispatch, getState) => {
  const state = getState();
  const { token } = state.login;

  axios(token)
    .delete(`/comment/${id}`)
    .then(() => dispatch(deleteComment(id)))
    .catch(err => dispatch(error(err)));
};
