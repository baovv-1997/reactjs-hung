import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as CompanyAction from '../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getListStatusCompany() {
  try {
    const response = yield call(() => API.get(ROUTES.API_GET_LIST_COMPANY));

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({ type: CompanyAction.getListStatusCompanySuccess, data });
    } else {
      // In case: signup request failed
      yield put({
        type: CompanyAction.getListStatusCompanyFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: CompanyAction.getListStatusCompanyFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getListStatusCompanySaga() {
  yield takeLatest(CompanyAction.getListStatusCompany, getListStatusCompany);
}

export default getListStatusCompanySaga;
