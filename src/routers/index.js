import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTERS from 'constants/routers';
import Loading from 'commons/components/Loading';
import { API } from '../apis';

// components
const StatusCompany = lazy(() => import('modules/statusCompany/components'));
const StatusCompanyByArea = lazy(() =>
  import('modules/statusCompany/components/statusByArea')
);
const operationStatusByCompany = lazy(() =>
  import('modules/operationStatus/components')
);
const operationStatusByArea = lazy(() =>
  import('modules/operationStatus/components/statusByArea')
);

const MainPage = lazy(() => import('modules/main/components/Dashboard'));
// const DeviceManagement = lazy(() => import('modules/device/components'));
const SingIn = lazy(() => import('modules/accounts/components'));
const DashboardArea = lazy(() =>
  import('modules/main/components/Dashboard/DashboardArea')
);
const DashboardCompany = lazy(() =>
  import('modules/main/components/Dashboard/DashboardCompany')
);

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
            path={ROUTERS.DASHBOARD_COMPANY}
            component={DashboardCompany}
          />
          <Route
            exact
            path={ROUTERS.STATUS_COMPANY}
            component={StatusCompany}
          />
          <Route
            exact
            path={ROUTERS.STATUS_COMPANY_BY_AREA}
            component={StatusCompanyByArea}
          />
          <Route
            exact
            path={ROUTERS.OPERATION_STATUS_BY_COMPANY}
            component={operationStatusByCompany}
          />
          <Route
            exact
            path={ROUTERS.OPERATION_STATUS_BY_AREA}
            component={operationStatusByArea}
          />
          {/* <Route
            exact
            path={ROUTERS.DeviceManagement}
            component={DeviceManagement}
          /> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
