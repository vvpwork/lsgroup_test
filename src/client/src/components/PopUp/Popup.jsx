import React from 'react';
import ReactDOM from 'react-dom';
import T from 'prop-types';
import Button from '../Button';
import s from './style.module.scss';

const Popup = ({ children, toggle = () => {} }) => {
  return ReactDOM.createPortal(
    <div className={s.container}>
      <div className={s.content}>
        {children}
        <div className={s.button}>
          <Button theme="close" onClick={toggle} />
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

Popup.propTypes = {
  children: T.node,
  toggle: T.func,
};

export default Popup;
