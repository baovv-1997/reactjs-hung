// @flow

import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import Loading from 'commons/components/Loading';
// import { API } from '../apis';

import SingIn from 'modules/accounts/components/index';
import MainLayout from '../layout/MainLayout';

const Router = () => {
  // const dispatch = useDispatch();

  // const token = useSelector((state) => state?.account?.token);
  // if (token) {
  //   API.setHeader('Authorization', `Bearer ${token}`);
  // }
  // const isAuthenticated = token !== '';
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <MainLayout></MainLayout>
        <Switch>
          <Route exact path={ROUTERS.LOGIN} component={SingIn} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
