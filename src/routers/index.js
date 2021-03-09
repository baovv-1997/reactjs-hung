// @flow

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTERS from 'constants/routers';
import Loading from 'commons/components/Loading';
// components
import { API } from '../apis';

// components

const MainPage = lazy(() => import('modules/main/components'));
const DeviceManagement = lazy(() => import('modules/device/components'));
const SingIn = lazy(() => import('modules/accounts/components'));

const Router = () => {
  const token = useSelector((state) => state?.account?.token);
  if (token) {
    API.setHeader('Authorization', `Bearer ${token}`);
  }
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={ROUTERS.LOGIN} component={SingIn} />
          <Route exact path={ROUTERS.ROOT} component={MainPage} />
          <Route
            exact
            path={ROUTERS.DeviceManagement}
            component={DeviceManagement}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
