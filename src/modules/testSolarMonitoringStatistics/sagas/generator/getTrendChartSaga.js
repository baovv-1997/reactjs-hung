import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as CompanyAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getDataTrendChartStatisticsGenerator(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_TEST_SOLAR_MONITORING_STATISTICS_CHART, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: CompanyAction.getDataTrendChartStatisticsGeneratorSuccess,
        data,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: CompanyAction.getDataTrendChartStatisticsGeneratorFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: CompanyAction.getDataTrendChartStatisticsGeneratorFailed,
    });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getDataTrendChartStatisticsGeneratorSaga() {
  yield takeLatest(
    CompanyAction.getDataTrendChartStatisticsGenerator,
    getDataTrendChartStatisticsGenerator
  );
}

export default getDataTrendChartStatisticsGeneratorSaga;
