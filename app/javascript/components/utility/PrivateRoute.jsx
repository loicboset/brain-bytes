import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './routing';

const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={props => (
      isLogin()
        ? <Component {...props} />
        : <Redirect to={`/users/sign_in`} />
    )} />
  );
};

export default PrivateRoute;
