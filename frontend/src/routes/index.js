import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./../pages/Login";
import Register from "./../pages/Register";
import ForgotPassword from "./../pages/ForgotPassword";
import Profile from "./../pages/Profile";
import NewPassword from "./../pages/NewPassword";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
        <Route component={ForgotPassword} exact path="/forgot-password" />
        <Route component={Profile} exact path="/profile" />
        <Route component={NewPassword} exact path="/password/new" />
      </Switch>
    </BrowserRouter>
  );
}
