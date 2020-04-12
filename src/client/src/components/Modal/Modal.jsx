import React from "react";
import T from "prop-types";
import LoginForm from "../LoginForm";
import RegistrForm from "../RegistrForm";
import s from "./style.module.scss";

const Modal = ({ login = false }) => {
  return (
    <div className={s.container}>{login ? <LoginForm /> : <RegistrForm />}</div>
  );
};

Modal.propType = {
  login: T.bool,
};

export default Modal;
    