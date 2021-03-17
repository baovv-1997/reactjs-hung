// @flow

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
const operationStatusByCompanyDetail = lazy(() =>
  import('modules/operationStatus/components/detail')
);

const operationStatusByCompanyRegister = lazy(() =>
  import('modules/operationStatus/components/register')
);

const operationStatusByCompanyEdit = lazy(() =>
  import('modules/operationStatus/components/edit')
);

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

const testMockupOperationStatusDetail = lazy(() =>
  import('modules/testMockupStatus/components/operationStatus/detail')
);
const testMockupOperationStatusRegister = lazy(() =>
  import('modules/testMockupStatus/components/operationStatus/register')
);
const testMockupOperationStatusEdit = lazy(() =>
  import('modules/testMockupStatus/components/operationStatus/edit')
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

// const testMockupOperationStatics = lazy(() =>
//   import('modules/testMockupStatistics/components/statisticsOperation')
// );
// const testMockupOperationStaticsDevelopment = lazy(() =>
//   import('modules/testMockupStatistics/components/statisticsDevelopment')
// );

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
            path={ROUTERS.REGISTER_DEVICE}
            component={RegisterDevice}
          />
          <Route exact path={ROUTERS.DEVICE} component={DeviceManagement} />
          <Route exact path={ROUTERS.DEVICE_DETAIL} component={DeviceDetail} />
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
            path={ROUTERS.OPERATION_STATUS_BY_COMPANY_REGISTER}
            component={operationStatusByCompanyRegister}
          />
          <Route
            exact
            path={ROUTERS.OPERATION_STATUS_BY_COMPANY_DETAIL}
            component={operationStatusByCompanyDetail}
          />
          <Route
            exact
            path={ROUTERS.OPERATION_STATUS_BY_COMPANY_EDIT}
            component={operationStatusByCompanyEdit}
          />
          <Route
            exact
            path={ROUTERS.OPERATION_STATUS_BY_AREA}
            component={operationStatusByArea}
          />
          <Route
            exact
            path={ROUTERS.TEST_DASHBOARD}
            component={TestDashboard}
          />
          <Route
            exact
            path={ROUTERS.SOLAR_DASHBOARD}
            component={SolarDashboard}
          />
          <Route
            exact
            path={ROUTERS.STATISTICS_DEVELOP}
            component={statisticsDevelopByCompany}
          />
          <Route
            exact
            path={ROUTERS.STATISTICS_DEVELOP_AREA}
            component={statisticsDevelopByArea}
          />

          <Route
            exact
            path={ROUTERS.ACCOUNT_MANAGEMENT_DETAIL}
            component={accountDetail}
          />
          <Route
            exact
            path={ROUTERS.ACCOUNT_MANAGEMENT}
            component={accountManagement}
          />
          <Route
            path={ROUTERS.OPERATION_STATISTICS_COMPANY}
            component={statisticsOperationByCompany}
          />
          <Route
            exact
            path={ROUTERS.OPERATION_STATISTICS_AREA}
            component={statisticsOperationByArea}
          />
          <Route
            exact
            path={ROUTERS.TEST_MOCKUP_STATUS}
            component={testMockupStatus}
          />
          <Route
            exact
            path={ROUTERS.TEST_MOCKUP_OPERATION}
            component={testMockupOperationStatus}
          />
          <Route
            exact
            path={ROUTERS.TEST_MOCKUP_OPERATION_STATUS_REGISTER}
            component={testMockupOperationStatusRegister}
          />
          <Route
            exact
            path={ROUTERS.TEST_MOCKUP_OPERATION_STATUS_DETAIL}
            component={testMockupOperationStatusDetail}
          />
          <Route
            exact
            path={ROUTERS.TEST_MOCKUP_OPERATION_STATUS_EDIT}
            component={testMockupOperationStatusEdit}
          />

          <Route
            exact
            path={ROUTERS.TEST_MOCKUP_STATISTICS_OPERATION}
            component={testMockupOperationStatics}
          />
          <Route
            exact
            path={ROUTERS.TEST_MOCKUP_STATISTICS_DEVELOP}
            component={testMockupOperationStaticsDevelopment}
          />

          <Route
            exact
            path={ROUTERS.TEST_SOLAR_STATUS_DEVELOP}
            component={testSolarMonitoringStatusDevelopment}
          />
          <Route
            exact
            path={ROUTERS.TEST_SOLAR_STATUS_OPERATION}
            component={testSolarMonitoringStatusOperation}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
