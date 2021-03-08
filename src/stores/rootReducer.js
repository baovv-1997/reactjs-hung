import { combineReducers } from '@reduxjs/toolkit';
import accountSlice from 'modules/accounts/redux';
import mainReducer from 'modules/main/redux';

const appReducer = combineReducers({
  account: accountSlice,
  main: mainReducer,
});

export default appReducer;
