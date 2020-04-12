import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../helper/axios";
import { loginAsync } from "../../redux/login/loginAsync";
import Input from "../Input";
import Button from "../Button";
import s from "./style.module.scss";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const { email, password } = state;
  const dispatch = useDispatch();
  const inputChange = ({ target }) => {
    setState((prevState) => ({
      ...prevState,
      ...{ [target.name]: target.value },
    }));
  };
  const formSubmit = (ev) => {
    ev.preventDefault();

    dispatch(loginAsync(state));
  };
  return (
    <div className={s.container}>
      <h1 className={s.title}>Login</h1>
      <form onSubmit={formSubmit} className={s.form}>
        <label htmlFor="" className={s.label}>
          <p className={s.text}>e-mail</p>
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
          <p className={s.text}>password</p>
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
        <Button value="GO!" theme="blue" type="submit" />
      </form>
    </div>
  );
};

export default Login;
