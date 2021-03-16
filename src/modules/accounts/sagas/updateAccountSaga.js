import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from '../../../apis';

import * as AccountAction from '../redux';

// worker Saga: will be fired on SIGN_IN actions
function* updateAccount(action) {
  const {
    name,
    phone,
    password,
    passConfirm,
    currentOption,
    idInverterList,
    id,
  } = action.payload;
  try {
    const response = yield call(() =>
      API.put(
        ROUTES.UPDATE_ACCOUNT(id),
        JSON.stringify({
          role: currentOption,
          name,
          phone: phone.replace(/-/g, ''),
          password,
          password_confirmation: passConfirm,
          inverter_ids: idInverterList,
        })
      )
    );

    if (response.ok) {
      const { data } = response?.data;
      // In case: signup request success
      yield put({ type: 'accounts/updateAccountSuccess', data });
    } else {
      // In case: signup request failed
      yield put({
        type: 'accounts/updateAccountFailed',
        errors: response?.data?.errors,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'accounts/updateAccountFailed' });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* updateAccountSaga() {
  yield takeLatest(AccountAction.updateAccount, updateAccount);
}

export default updateAccountSaga;
