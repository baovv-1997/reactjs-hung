import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as CompanyAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getDataRawTableGenerator(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_TEST_SOLAR_MONITORING_STATISTICS_RAW, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: CompanyAction.getDataRawTableGeneratorSuccess,
        data,
        params: action.payload,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: CompanyAction.getDataRawTableGeneratorFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: CompanyAction.getDataRawTableGeneratorFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getDataRawTableGeneratorSaga() {
  yield takeLatest(
    CompanyAction.getDataRawTableGenerator,
    getDataRawTableGenerator
  );
}

export default getDataRawTableGeneratorSaga;
