import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from '../../../apis';

// worker Saga: will be fired on SIGN_IN actions
function* deleteAccount(action) {
  try {
    const response = yield call(() =>
      API.delete(ROUTES.UPDATE_ACCOUNT(action.payload))
    );

    if (response.ok) {
      const { data } = response?.data;
      // In case: signup request success
      yield put({ type: 'accounts/deleteAccountSuccess', data });
    } else {
      // In case: signup request failed
      yield put({
        type: 'accounts/deleteAccountFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'accounts/deleteAccountFailed' });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* deleteAccountSaga() {
  yield takeLatest('accounts/deleteAccount', deleteAccount);
}

export default deleteAccountSaga;
