import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as DashboardAction from '../redux';

function* getTotalMetric(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.GET_TOTAL_METRIC, action.payload)
    );
    if (response.ok) {
      const { data } = response;
      // In case: get card measure success
      yield put({
        type: DashboardAction.getTotalMetricSuccess,
        data,
      });
    } else {
      // In case: get card measure failed
      yield put({
        type: DashboardAction.getTotalMetricFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: DashboardAction.getTotalMetricFailed,
      error,
    });
  }
}

function* getTotalMetricSaga() {
  yield takeLatest(DashboardAction.getTotalMetric, getTotalMetric);
}

export default getTotalMetricSaga;
