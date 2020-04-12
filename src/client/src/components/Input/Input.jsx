import React from "react";
import T from "prop-types";
import s from "./style.module.scss";

const Input = ({
  value = "",
  name = "",
  onChange = () => {},
  placeholder,
  type = "text",
  style,
  required,
}) => {
  return (
    <input
      {...{ value, name, onChange, placeholder, type, style, required }}
      className={s.container}
    />
  );
};

Input.propTypes = {
  value: T.string,
  name: T.string,
  onChange: T.func,
  placeholder: T.string,
  type: T.string,
  style: T.object,
  required: T.bool,
};

export default Input;
