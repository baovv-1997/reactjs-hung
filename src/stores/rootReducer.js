import { combineReducers } from '@reduxjs/toolkit';
import accountSlice from 'modules/accounts/redux';

const appReducer = combineReducers({
  account: accountSlice,
});

export default appReducer;
