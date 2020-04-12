import React from 'react';
import { useDispatch } from 'react-redux';
import { logOutAsync } from '../../redux/login/loginAsync';
import { ReactComponent as Logout } from '../../assets/icons/logout.svg';

import s from './style.module.scss';

const LogOut = () => {
  const dispatch = useDispatch();
  const onClick = ev => {
    dispatch(logOutAsync());
  };
  return (
    <div className={s.container} {...{ onClick }}>
      <Logout />
    </div>
  );
};

export default LogOut;
