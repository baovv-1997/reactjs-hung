// @flow

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import Loading from 'commons/components/Loading';
// import { API } from '../apis';
// components
import SingIn from 'modules/accounts/components/index';

const MainPage = lazy(() => import('modules/main/components'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={ROUTERS.LOGIN} component={SingIn} />
          <Route exact path={ROUTERS.ROOT} component={MainPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
