import React from 'react';
import T from 'prop-types';
import s from './style.module.scss'
import CommentItem from './Comment';

const CommentList = ({ comments }) => {
  return (
    <ul className={s.list}>
      {comments.map(comment => (
        <li key={comment._id} className={s.li}>
          {' '}
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
