import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as CompanyAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getDataRawTableOperation(action) {
  try {
    const response = yield call(() =>
      API.get(
        ROUTES.API_TEST_SOLAR_MONITORING_STATISTICS_OPERATION_RAW,
        action.payload
      )
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: CompanyAction.getDataRawTableOperationSuccess,
        data,
        params: action.payload,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: CompanyAction.getDataRawTableOperationFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: CompanyAction.getDataRawTableOperationFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getDataRawTableOperationSaga() {
  yield takeLatest(
    CompanyAction.getDataRawTableOperation,
    getDataRawTableOperation
  );
}

export default getDataRawTableOperationSaga;
