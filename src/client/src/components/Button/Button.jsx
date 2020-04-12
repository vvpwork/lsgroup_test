import React from 'react';
import T from 'prop-types';
import s from './style.module.scss';

const Button = ({
  value = '',
  theme = 'white',
  type = 'button',
  onClick = () => {},
}) => {
  return (
    <button className={s[theme]} {...{ type, onClick }}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: T.string,
  theme: T.oneOf(['blue', 'rose', 'white', 'add']),
  type: T.string,
  onClick: T.func,
};

export default Button;
