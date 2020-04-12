import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import s from "./style.module.scss";

const RegistrForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });
  const { email, password, name, surname } = state;
  const inputChange = ({ target }) => {
    setState((prevState) => ({
      ...prevState,
      ...{ [target.name]: target.value },
    }));
  };
  const formSubmit = (ev) => {
    ev.preventDefault();
    console.log(state);
  };
  return (
    <div className={s.container}>
      <h1 className={s.title}>Registration</h1>
      <form onSubmit={formSubmit} className={s.form}>
        <label htmlFor="" className={s.label}>
          <p className={s.text}>First name</p>
          <div className={s.input}>
            <Input
              name="name"
              type="text"
              required={true}
              value={name}
              onChange={inputChange}
            />
          </div>
        </label>
        <label htmlFor="" className={s.label}>
          <p className={s.text}>Last name</p>
          <div className={s.input}>
            <Input
              name="surname"
              type="text"
              required={true}
              value={surname}
              onChange={inputChange}
            />
          </div>
        </label>
        <label htmlFor="" className={s.label}>
          <p className={s.text}>e-mail<span>*</span></p>
          <div className={s.input}>
            <Input
              name="email"
              type="email"
              required={true}
              value={email}
              onChange={inputChange}
            />
          </div>
        </label>
        <label htmlFor="" className={s.label}>
          <p className={s.text}>password<span>*</span></p>
          <div className={s.input}>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={inputChange}
              required={true}
            />
          </div>
        </label>
        <Button value="GO!" theme="rose" type="submit" />
      </form>
    </div>
  );
};

export default RegistrForm;
