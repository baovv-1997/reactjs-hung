import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from '../../../apis';

import * as AccountAction from '../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getListCompany() {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_GET_LIST_COMPANY, { sort_by: 'id', sort_dir: 'asc' })
    );

    if (response.ok) {
      const { data } = response?.data;
      // In case: signup request success
      yield put({ type: AccountAction.getListCompanySuccess, data });
    } else {
      // In case: signup request failed
      yield put({
        type: AccountAction.getListCompanyFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: AccountAction.getListCompanyFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getListCompanySaga() {
  yield takeLatest(AccountAction.getListCompany, getListCompany);
}

export default getListCompanySaga;
