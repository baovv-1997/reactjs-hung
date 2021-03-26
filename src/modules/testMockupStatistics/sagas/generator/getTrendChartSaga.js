import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as CompanyAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getTrendChartTestMKStatisticsGenerator(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_TEST_MOCKUP_STATISTIC_GENERATOR_CHART, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: CompanyAction.getTrendChartTestMKStatisticsGeneratorSuccess,
        data,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: CompanyAction.getTrendChartTestMKStatisticsGeneratorFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: CompanyAction.getTrendChartTestMKStatisticsGeneratorFailed,
    });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getTrendChartTestMKStatisticsGeneratorSaga() {
  yield takeLatest(
    CompanyAction.getTrendChartTestMKStatisticsGenerator,
    getTrendChartTestMKStatisticsGenerator
  );
}

export default getTrendChartTestMKStatisticsGeneratorSaga;
