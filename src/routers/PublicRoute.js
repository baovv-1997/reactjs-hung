// @flow
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  component: any,
  path: string,
  restricted: Boolean,
};

const PrivateRoute = ({
  component: Component,
  restricted,
  path,
  ...rest
}: Props) => {
  const loginPath = '/login';
  return (
    <Route
      {...rest}
      render={(props) =>
        restricted || (!restricted && loginPath === path) ? (
          <Component path={path} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: loginPath,
            }}
          />
        )
      }
    />
  );
};

export default React.memo<Props>(PrivateRoute);
