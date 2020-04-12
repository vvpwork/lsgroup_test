import React from 'react';
import { format } from 'date-fns';
import T from 'prop-types';
import s from './style.module.scss'

const CommentItem = ({ comment }) => {
  const { updatedAt, description } = comment;
  const date = format(new Date(updatedAt), 'dd/MM/yyyy');
  return (
    <div className={s.item}>
      <p className={s.date}>{date}</p>
      <p className = {s.text}>{description}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: T.object,
};

export default CommentItem;
