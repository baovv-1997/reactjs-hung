import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from '../../../apis';

import * as AccountAction from '../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getListInverter(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_GET_LIST_DEVICE, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({ type: AccountAction.getListInverterSuccess, data });
    } else {
      // In case: signup request failed
      yield put({
        type: AccountAction.getListInverterFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: AccountAction.getListInverterFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getListInverterSaga() {
  yield takeLatest(AccountAction.getListInverter, getListInverter);
}

export default getListInverterSaga;
