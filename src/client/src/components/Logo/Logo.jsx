import React from "react";
import logo from "../../assets/img/log.png";
import { ReactComponent as LogoSvg } from "../../assets/icons/logo_lsgroup.svg";
import T from "prop-types";
import s from "./style.module.scss";

const Logo = ({ width }) => {
  return (
    <LogoSvg {...width} />
  );
};

Logo.propTypes = {
  width: T.string,
};

export default Logo;
