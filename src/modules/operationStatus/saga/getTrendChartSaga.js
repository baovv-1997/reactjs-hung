import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getTrendChart(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.STATUS_OPERATOR_TREND_CHART, action.payload)
    );
    if (response.ok) {
      const { data } = response.data;

      // In case: request success
      yield put({
        type: 'operationStatus/getTrendChartSuccess',
        data,
        total: response?.data?.total,
        currentPage: response?.data?.current_page,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'operationStatus/getTrendChartFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'operationStatus/getTrendChartFailed', error });
  }
}

function* getTrendChartSaga() {
  yield takeLatest('operationStatus/getTrendChart', getTrendChart);
}

export default getTrendChartSaga;
