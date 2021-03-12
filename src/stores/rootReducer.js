import { combineReducers } from '@reduxjs/toolkit';
import accountSlice from 'modules/accounts/redux';
import mainReducer from 'modules/main/redux';
import statusCompanySlide from 'modules/statusCompany/redux';
import deviceReducer from 'modules/device/redux';
import operationStatusSlide from 'modules/operationStatus/redux';
import testDashboardSlice from 'modules/testDashboard/redux';
import solarDashboardSlice from 'modules/solarDashboard/redux';

const appReducer = combineReducers({
  account: accountSlice,
  main: mainReducer,
  statusCompany: statusCompanySlide,
  device: deviceReducer,
  operationStatus: operationStatusSlide,
  testDashboard: testDashboardSlice,
  solarDashboard: solarDashboardSlice,
});

export default appReducer;
