import React from "react";
import s from "./style.module.scss";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

const homePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        ...comment
        <br /> on your day
      </h1>
      <div className={s.logo}>
        <Logo />
      </div>
      <section className={s.section}>
        <Button value="Registration" theme="white" />
        <p>or</p>
        <Button value="Login" theme="blue" />
      </section>
    </div>
  );
};

export default homePage;
