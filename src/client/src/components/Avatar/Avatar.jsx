import React from 'react';
import T from 'prop-types';
import { ReactComponent as Ava } from '../../assets/icons/avatar.svg';

import s from './style.module.scss';

const Avatar = ({ name = '' }) => {
  return (
    <div className={s.container}>
      <Ava width={50} />
      <p>{name.slice(0, 6)}</p>
    </div>
  );
};

Avatar.propTypes = {
  name: T.string,
};

export default Avatar;
