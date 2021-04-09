import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from '../../../apis';

import * as signUpAction from '../redux';

// worker Saga: will be fired on SIGN_UP actions
function* signUp(action) {
  try {
    const response = yield call(() =>
      API.post(ROUTES.SIGN_UP, JSON.stringify(action.payload))
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({ type: signUpAction.signUpRequestSuccess, data });
    } else {
      const { data } = response;
      // In case: signup request failed
      yield put({
        type: signUpAction.signUpRequestFailed,
        errorMsg: data?.errors,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: signUpAction.signUpRequestFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_UP` action.
*/
function* signUpSaga() {
  yield takeLatest(signUpAction.signUpRequest, signUp);
}

export default signUpSaga;
