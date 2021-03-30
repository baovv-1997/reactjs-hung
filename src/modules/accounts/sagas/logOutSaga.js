import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from '../../../apis';

// worker Saga: will be fired on SIGN_IN actions
function* logOut() {
  try {
    const response = yield call(() => API.post(ROUTES.LOG_OUT));

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({ type: 'accounts/logOutSuccess', data });
    } else {
      const { data } = response;
      // In case: signup request failed
      yield put({
        type: 'accounts/logOutFailed',
        errorMsg: data?.error_msg,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'accounts/logOutFailed' });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* logOutSaga() {
  yield takeLatest('accounts/logOut', logOut);
}

export default logOutSaga;
