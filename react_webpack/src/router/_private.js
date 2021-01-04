import React from 'react';
import { Route } from 'react-router-dom';
import { isLoggedIn } from '../lib/Auth';

const PrivateRoute = function ({ component: Component, ...rest }) {
  return (isLoggedIn ?
    <Route
      {...rest}
      render={props => <Component {...props} />}
    /> : "not logged in"
  );
};

export default PrivateRoute;