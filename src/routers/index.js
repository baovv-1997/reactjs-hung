// @flow

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTERS from 'constants/routers';
import Loading from 'commons/components/Loading';
import MainLayout from 'layout/MainLayout';
import { API } from '../apis';
import PrivateRoute from './PrivateRoute';

const eventDetail = lazy(() => import('commons/components/Event/Detail'));
const eventEdit = lazy(() => import('commons/components/Event/Edit'));
const EventRegister = lazy(() => import('commons/components/Event/Register'));
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

// const operationStatusByCompanyEdit = lazy(() =>
//   import('modules/operationStatus/components/edit')
// );

const statisticsDevelopByCompany = lazy(() =>
  import('modules/statisticsDevelop/components/statisticsByCompany')
);

const statisticsDevelopByArea = lazy(() =>
  import('modules/statisticsDevelop/components/statisticsByArea')
);

const statisticsOperationByCompany = lazy(() =>
  import('modules/operationStatistics/components/statisticsByCompany')
);

const statisticsOperationByArea = lazy(() =>
  import('modules/operationStatistics/components/statisticsByArea')
);

const RegisterDevice = lazy(() =>
  import('modules/device/components/RegisterDevice')
);

// components
const MainPage = lazy(() => import('modules/main/components/Dashboard'));
const DeviceManagement = lazy(() => import('modules/device/components'));
const DeviceEdit = lazy(() => import('modules/device/components/DeviceEdit'));
const DeviceDetail = lazy(() =>
  import('modules/device/components/DeviceDetail')
);
const SingIn = lazy(() => import('modules/accounts/components'));
const DashboardArea = lazy(() =>
  import('modules/main/components/Dashboard/DashboardArea')
);
const DashboardCompany = lazy(() =>
  import('modules/main/components/Dashboard/DashboardCompany')
);
const TestDashboard = lazy(() => import('modules/testDashboard/components'));
const SolarDashboard = lazy(() => import('modules/solarDashboard/components'));

const accountManagement = lazy(() =>
  import('modules/accounts/components/management')
);

const accountDetail = lazy(() =>
  import('modules/accounts/components/management/AccountDetail')
);

const testMockupStatus = lazy(() =>
  import('modules/testMockupStatus/components')
);

const testMockupOperationStatus = lazy(() =>
  import('modules/testMockupStatus/components/operationStatus/index')
);

const testMockupOperationStatics = lazy(() =>
  import('modules/testMockupStatistics/components/statisticsOperation')
);
const testMockupOperationStaticsDevelopment = lazy(() =>
  import('modules/testMockupStatistics/components/statisticsDevelopment')
);

const testSolarMonitoringStatusDevelopment = lazy(() =>
  import('modules/testSolarMonitoringStatus/components/statusDevelop')
);
const testSolarMonitoringStatusOperation = lazy(() =>
  import('modules/testSolarMonitoringStatus/components/statusOperation')
);

const testSolarMonitoringStaticsDevelopment = lazy(() =>
  import('modules/testSolarMonitoringStatistics/components/statisticsDevelop')
);
const testSolarMonitoringStaticsOperation = lazy(() =>
  import('modules/testSolarMonitoringStatistics/components/statisticsOperation')
);
const EditAccount = lazy(() =>
  import('modules/accounts/components/management/EditAccount')
);

const Router = () => {
  const token = useSelector((state) => state?.account?.token);
  if (token) {
    API.setHeader('Authorization', `Bearer ${token}`);
  }

  const isAuthenticated = token !== '';

  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={ROUTERS.LOGIN} component={SingIn} />
            <PrivateRoute
              exact
              path={ROUTERS.ROOT}
              component={MainPage}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.DASHBOARD_AREA}
              component={DashboardArea}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.DASHBOARD_COMPANY}
              component={DashboardCompany}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.STATUS_COMPANY}
              component={StatusCompany}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.REGISTER_DEVICE}
              component={RegisterDevice}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.ACCOUNT_MANAGEMENT_EDIT}
              component={EditAccount}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.DEVICE}
              component={DeviceManagement}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              exact
              path={ROUTERS.DEVICE_EDIT}
              component={DeviceEdit}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.DEVICE_DETAIL}
              component={DeviceDetail}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              exact
              path={ROUTERS.EVENT_DETAIL}
              component={eventDetail}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.EVENT_EDIT}
              component={eventEdit}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.EVENT_REGISTER}
              component={EventRegister}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.STATUS_COMPANY_BY_AREA}
              component={StatusCompanyByArea}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.OPERATION_STATUS_BY_COMPANY}
              component={operationStatusByCompany}
              isAuthenticated={isAuthenticated}
            />

            {/* <PrivateRoute
            exact
            path={ROUTERS.OPERATION_STATUS_BY_COMPANY_EDIT}
            component={operationStatusByCompanyEdit}
            isAuthenticated={isAuthenticated}
          /> */}
            <PrivateRoute
              exact
              path={ROUTERS.OPERATION_STATUS_BY_AREA}
              component={operationStatusByArea}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.TEST_DASHBOARD}
              component={TestDashboard}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.SOLAR_DASHBOARD}
              component={SolarDashboard}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.STATISTICS_DEVELOP}
              component={statisticsDevelopByCompany}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.STATISTICS_DEVELOP_AREA}
              component={statisticsDevelopByArea}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              exact
              path={ROUTERS.ACCOUNT_MANAGEMENT_DETAIL}
              component={accountDetail}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.ACCOUNT_MANAGEMENT}
              component={accountManagement}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.OPERATION_STATISTICS_COMPANY}
              component={statisticsOperationByCompany}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.OPERATION_STATISTICS_AREA}
              component={statisticsOperationByArea}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.TEST_MOCKUP_STATUS}
              component={testMockupStatus}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.TEST_MOCKUP_OPERATION}
              component={testMockupOperationStatus}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              exact
              path={ROUTERS.TEST_MOCKUP_STATISTICS_OPERATION}
              component={testMockupOperationStatics}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.TEST_MOCKUP_STATISTICS_DEVELOP}
              component={testMockupOperationStaticsDevelopment}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              exact
              path={ROUTERS.TEST_SOLAR_STATUS_DEVELOP}
              component={testSolarMonitoringStatusDevelopment}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.TEST_SOLAR_STATUS_OPERATION}
              component={testSolarMonitoringStatusOperation}
              isAuthenticated={isAuthenticated}
            />

            <PrivateRoute
              exact
              path={ROUTERS.TEST_SOLAR_STATISTICS_DEVELOP}
              component={testSolarMonitoringStaticsDevelopment}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              exact
              path={ROUTERS.TEST_SOLAR_STATISTICS_OPERATION}
              component={testSolarMonitoringStaticsOperation}
              isAuthenticated={isAuthenticated}
            />
          </Switch>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router;
