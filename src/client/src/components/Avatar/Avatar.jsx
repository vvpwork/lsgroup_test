import React from 'react';
import T from 'prop-types';
import { ReactComponent as Ava } from '../../assets/icons/avatar.svg';

import s from './style.module.scss';

const Avatar = ({ name = '', onClick }) => {
  return (
    <div className={s.container} {...{onClick}}>
      <Ava width={50} />
      <p>{name.slice(0, 6)}</p>
    </div>
  );
};

Avatar.propTypes = {
  name: T.string,
  onClick: T.func,
};

export default Avatar;
