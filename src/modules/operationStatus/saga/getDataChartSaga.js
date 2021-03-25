import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getDataChart(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.STATUS_OPERATOR_CHART, action.payload)
    );
    if (response.ok) {
      const { data } = response;

      // In case: request success
      yield put({
        type: 'operationStatus/getDataChartSuccess',
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'operationStatus/getDataChartFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'operationStatus/getDataChartFailed', error });
  }
}

function* getDataChartSaga() {
  yield takeLatest('operationStatus/getDataChart', getDataChart);
}

export default getDataChartSaga;
