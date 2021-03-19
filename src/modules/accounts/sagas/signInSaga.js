import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from '../../../apis';

import * as SignInAction from '../redux';

// worker Saga: will be fired on SIGN_IN actions
function* signIn(action) {
  try {
    const response = yield call(() =>
      API.post(ROUTES.SIGN_IN, JSON.stringify(action.payload))
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({ type: SignInAction.signInRequestSuccess, data });
    } else {
      const { data } = response;
      // In case: signup request failed
      yield put({
        type: SignInAction.signInRequestFailed,
        errorMsg: data?.error_msg,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: SignInAction.signInRequestFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* signInSaga() {
  yield takeLatest(SignInAction.signInRequest, signIn);
}

export default signInSaga;
