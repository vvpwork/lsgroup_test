import React from "react";
import T from "prop-types";
import s from "./style.module.scss";

const Button = ({ value, theme }) => {
  return <button className={s[theme]}>{value}</button>;
};

Button.propTypes = {
  value: T.string,
  theme: T.oneOf("blue", "rose", "white"),
};

export default Button;
