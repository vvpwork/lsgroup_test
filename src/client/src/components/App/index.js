import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../common/PrivateRoute";
import R from "../../configs/routes";
import s from "./style.module.scss";

import HomePage from "../../pages/homePage";
import RoomPage from "../../pages/roomPage";

const App = () => {
  const { isAuthenticated, id } = useSelector((state) => state.login);
  return (
    <div className={s.container}>
      <Switch>
        <Route
          path={R.HOME}
          exact
          render={(props) =>
            !isAuthenticated ? (
              <HomePage {...props} />
            ) : (
              <Redirect to={R.USER + "/" + id} />
            )
          }
        />
        <PrivateRoute path={R.USER} component={RoomPage} />
        <Redirect to={R.HOME} />
      </Switch>
    </div>
  );
};

export default App;
