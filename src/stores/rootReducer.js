import { combineReducers } from '@reduxjs/toolkit';
import accountSlice from 'modules/accounts/redux';
import mainReducer from 'modules/main/redux';
import statusCompanySlide from 'modules/statusCompany/redux';
import deviceReducer from 'modules/device/redux';

const appReducer = combineReducers({
  account: accountSlice,
  main: mainReducer,
  statusCompany: statusCompanySlide,
  device: deviceReducer,
});

export default appReducer;
