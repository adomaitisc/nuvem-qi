import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

export function PrivateRoute({ children, ...rest }: any) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to="/login" />)}
    ></Route>
  );
}
