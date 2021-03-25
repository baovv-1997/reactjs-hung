import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as CompanyAction from '../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getDataRawTable(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_TEST_SOLAR_MONITORING_STATUS_RAW, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: CompanyAction.getDataRawTableSuccess,
        data,
        params: action.payload,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: CompanyAction.getDataRawTableFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: CompanyAction.getDataRawTableFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getDataRawTableSaga() {
  yield takeLatest(CompanyAction.getDataRawTable, getDataRawTable);
}

export default getDataRawTableSaga;
