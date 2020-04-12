import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import s from "./style.module.scss";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Modal from "../../components/Modal";

import "./index.css";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState(false);

  const btnClick = (ev) => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        className={s.container}
        onClick={() => {
          if (showModal) setShowModal(!showModal);
        }}
      >
        <h1 className={s.title}>
          ...comment
          <br /> on your day
        </h1>
        <div className={s.logo}>
          <Logo />
        </div>
        <section className={s.section}>
          <Button value="Registration" theme="white" onClick={btnClick} />
          <p>or</p>
          <Button value="Login" theme="blue" onClick={btnClick} />
        </section>
      </div>
      <CSSTransition
        in={showModal}
        timeout={200}
        unmountOnExit
        classNames="modal_registration"
      >
        <Modal login={true} />
      </CSSTransition>
    </>
  );
};

export default HomePage;
