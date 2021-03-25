import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';

function* getStatusGeneratorChartData(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.STATUS_GENERATOR_CHART, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      yield put({
        type: 'statusCompany/getStatusGeneratorChartDataSuccess',
        data,
      });
    } else {
      yield put({
        type: 'statusCompany/getStatusGeneratorChartDataFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'statusCompany/getStatusGeneratorChartDataFailed' });
  }
}

function* getStatusGeneratorChartSaga() {
  yield takeLatest(
    'statusCompany/getStatusGeneratorChartData',
    getStatusGeneratorChartData
  );
}

export default getStatusGeneratorChartSaga;
