// @flow

import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTERS from 'constants/routers';
import Loading from 'commons/components/Loading';

// components
import SingIn from 'modules/accounts/components/index';
import MainPage from 'modules/main/components/Dashboard';
import DashboardArea from 'modules/main/components/Dashboard/DashboardArea';

import StatusCompany from 'modules/statusCompany/components';
import { API } from '../apis';

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
            path={ROUTERS.DASHBOARD_AREA}
            component={DashboardArea}
          />
          <Route
            exact
            path={ROUTERS.STATUS_COMPANY}
            component={StatusCompany}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
