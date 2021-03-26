import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as CompanyAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getDataTrendChartOperation(action) {
  try {
    const response = yield call(() =>
      API.get(
        ROUTES.API_TEST_SOLAR_MONITORING_STATUS_OPERATION_TREND_CHART,
        action.payload
      )
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: CompanyAction.getDataTrendChartOperationSuccess,
        data,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: CompanyAction.getDataTrendChartOperationFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: CompanyAction.getDataTrendChartOperationFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getDataTrendChartOperationSagaSaga() {
  yield takeLatest(
    CompanyAction.getDataTrendChartOperation,
    getDataTrendChartOperation
  );
}

export default getDataTrendChartOperationSagaSaga;
