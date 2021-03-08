import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from '../../../apis';

import * as AccountAction from '../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getListArea() {
  try {
    const response = yield call(() => API.get(ROUTES.API_GET_LIST_POSITION));

    if (response.ok) {
      const { data } = response?.data;
      // In case: signup request success
      yield put({ type: AccountAction.getListAreaSuccess, data });
    } else {
      // In case: signup request failed
      yield put({
        type: AccountAction.getListAreaFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: AccountAction.getListAreaFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getListAreaSaga() {
  yield takeLatest(AccountAction.getListArea, getListArea);
}

export default getListAreaSaga;
