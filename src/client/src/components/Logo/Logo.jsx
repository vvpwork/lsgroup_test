import React from "react";
import logo from "../../assets/img/log.png";
import T from "prop-types";
import s from "./style.module.scss";

const Logo = ({ width }) => {
  return (
    <img src={logo} alt="logo" style={{ width }} className={s.container} />
  );
};

Logo.propTypes = {
  width: T.string,
};

export default Logo;
