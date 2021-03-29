import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as CompanyAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getDataChartTestMKStatisticsOperation(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_TEST_MOCKUP_STATISTIC_OPERATION_CHART, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: CompanyAction.getDataChartTestMKStatisticsOperationSuccess,
        data,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: CompanyAction.getDataChartTestMKStatisticsOperationFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: CompanyAction.getDataChartTestMKStatisticsOperationFailed,
    });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getDataChartTestMKStatisticsOperationSaga() {
  yield takeLatest(
    CompanyAction.getDataChartTestMKStatisticsOperation,
    getDataChartTestMKStatisticsOperation
  );
}

export default getDataChartTestMKStatisticsOperationSaga;
