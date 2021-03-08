// @flow

import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTERS from 'constants/routers';
import Loading from 'commons/components/Loading';
import { API } from '../apis';
// components
import SingIn from 'modules/accounts/components/index';
import MainPage from 'modules/main/components';
const token = useSelector((state) => state?.account?.token);
if (token) {
  API.setHeader('Authorization', `Bearer ${token}`);
}

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
