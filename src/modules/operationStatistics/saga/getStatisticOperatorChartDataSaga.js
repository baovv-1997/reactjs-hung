import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';

function* getStatisticOperatorChartData(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.OPERATOR_STATISTICS_CHART, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      yield put({
        type: 'statisticsDevelopStatus/getStatisticOperatorChartDataSuccess',
        data,
      });
    } else {
      yield put({
        type: 'statisticsDevelopStatus/getStatisticOperatorChartDataFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: 'statisticsDevelopStatus/getStatisticOperatorChartDataFailed',
    });
  }
}

function* getStatisticOperatorChartDataSaga() {
  yield takeLatest(
    'statisticsDevelopStatus/getStatisticOperatorChartData',
    getStatisticOperatorChartData
  );
}

export default getStatisticOperatorChartDataSaga;
