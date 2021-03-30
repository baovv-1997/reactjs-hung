import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';

function* getStatisticDevelopChartData(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.STATISTICS_DEVELOP_CHART, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      yield put({
        type: 'statisticsDevelopStatus/getStatisticDevelopChartDataSuccess',
        data,
      });
    } else {
      yield put({
        type: 'statisticsDevelopStatus/getStatisticDevelopChartDataFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: 'statisticsDevelopStatus/getStatisticDevelopChartDataFailed',
    });
  }
}

function* getStatisticDevelopChartDataSaga() {
  yield takeLatest(
    'statisticsDevelopStatus/getStatisticDevelopChartData',
    getStatisticDevelopChartData
  );
}

export default getStatisticDevelopChartDataSaga;
