import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../common/PrivateRoute";
import R from "../../configs/routes";
import s from "./style.module.scss";

import HomePage from "../../pages/homePage";
import RoomPage from "../../pages/roomPage";

const App = () => {
  return (
    <div className={s.container}>
      <Switch>
        <Route path={R.HOME} exact component={HomePage} />
        <PrivateRoute path={R.USER} component={RoomPage} />
        <Redirect to={R.HOME} />
      </Switch>
    </div>
  );
};

export default App;
