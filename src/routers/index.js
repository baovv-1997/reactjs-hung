// @flow

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTERS from 'constants/routers';
import Loading from 'commons/components/Loading';
import StatusCompany from 'modules/statusCompany/components';
import { API } from '../apis';

// components
const MainPage = lazy(() => import('modules/main/components/Dashboard'));
const DeviceManagement = lazy(() => import('modules/device/components'));
const DeviceDetail = lazy(() =>
  import('modules/device/components/DeviceDetail')
);
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
            path={ROUTERS.STATUS_COMPANY}
            component={StatusCompany}
          />
          <Route exact path={ROUTERS.DEVICE} component={DeviceManagement} />
          <Route exact path={ROUTERS.DEVICE_DETAIL} component={DeviceDetail} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
