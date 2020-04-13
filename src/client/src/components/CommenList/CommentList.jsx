import React from 'react';
import T from 'prop-types';
import { useDispatch } from 'react-redux';

import s from './style.module.scss';
import CommentItem from './Comment';
import Button from '../Button';
import { deleteCommentAsync } from '../../redux/comment/commentAsync';

const CommentList = ({ comments }) => {
  const dispatch = useDispatch();
  const btnClick = id => dispatch(deleteCommentAsync(id));

  return (
    <ul className={s.list}>
      {comments.map(comment => (
        <li key={comment._id} className={s.li}>
          {' '}
          <div className={s.button}>
            <Button theme="close" onClick={ev => btnClick(comment._id)} />
          </div>
          <CommentItem {...{ comment }} />
        </li>
      ))}
    </ul>
  );
};

CommentList.propTypes = {
  comments: T.arrayOf(T.object),
};

export default CommentList;
