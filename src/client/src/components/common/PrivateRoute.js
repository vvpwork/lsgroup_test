import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import R from "../../configs/routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = useSelector((state) => state.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to={R.HOME} />
      }
    />
  );
};

export default PrivateRoute;
