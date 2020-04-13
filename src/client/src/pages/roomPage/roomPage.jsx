import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../components/Logo';
import CommenList from '../../components/CommenList';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Logout from '../../components/logOut';

import { addCommentAsync } from '../../redux/comment/commentAsync';

  import s from './style.module.scss';

const RoomPage = () => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comment);
  const user = useSelector(state => state.user);

  const [comment, setComment] = useState('');

  const onChange = ({ target: { value } }) => {
    setComment(value);
  };

  const onSubmit = ev => {
    ev.preventDefault();
    dispatch(addCommentAsync(comment));
    setComment('')
  };

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>

      <h1 className={s.title}>...comment on your day</h1>

      <div className={s.avatar}>
        <Avatar name={user.name} />
        <Logout />
      </div>

      <form className={s.form} {...{ onSubmit }}>
        <p className={s.formText}>add you status day</p>
        <Button value="+" type="submit" theme="add" />
        <label htmlFor="" className={s.label}>
          <Input
            type="text"
            name="description"
            {...{ onChange }}
            value={comment}
          />
        </label>
      </form>

      <div className={s.list}>
        <CommenList {...{ comments }} />
      </div>
    </div>
  );
};

export default RoomPage;
