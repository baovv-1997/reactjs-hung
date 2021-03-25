import { combineReducers } from '@reduxjs/toolkit';
import accountSlice from 'modules/accounts/redux';
import mainReducer from 'modules/main/redux';
import statusGenerator from 'modules/statusCompany/redux';
import deviceReducer from 'modules/device/redux';
import operationStatusSlide from 'modules/operationStatus/redux';
import testDashboardSlice from 'modules/testDashboard/redux';
import solarDashboardSlice from 'modules/solarDashboard/redux';
import statisticsDevelopSlide from 'modules/statisticsDevelop/redux';
import testMockupStatusSlide from 'modules/testMockupStatus/redux';
import commonSilice from 'commons/redux';

import testSolarMonitoringStatusSlide from 'modules/testSolarMonitoringStatus/redux';
import testSMStatisticsGeneratorSlide from 'modules/testSolarMonitoringStatistics/redux';

const appReducer = combineReducers({
  account: accountSlice,
  main: mainReducer,
  statusCompany: statusGenerator,
  device: deviceReducer,
  operationStatus: operationStatusSlide,
  testDashboard: testDashboardSlice,
  solarDashboard: solarDashboardSlice,
  statisticsDevelop: statisticsDevelopSlide,
  testMockupStatus: testMockupStatusSlide,
  commons: commonSilice,
  testSolarMonitoringStatus: testSolarMonitoringStatusSlide,
  testSMStatisticsGenerator: testSMStatisticsGeneratorSlide,
});

export default appReducer;
