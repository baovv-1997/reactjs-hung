import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';

function* getStatisticGeneratorRawData(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.GENERATOR_STATISTICS_RAW, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      yield put({
        type: 'statisticsDevelopStatus/getStatisticGeneratorRawDataSuccess',
        data,
      });
    } else {
      yield put({
        type: 'statisticsDevelopStatus/getStatisticGeneratorRawDataFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: 'statisticsDevelopStatus/getStatisticGeneratorRawDataFailed',
    });
  }
}

function* getStatisticGeneratorRawDataSaga() {
  yield takeLatest(
    'statisticsDevelopStatus/getStatisticGeneratorRawData',
    getStatisticGeneratorRawData
  );
}

export default getStatisticGeneratorRawDataSaga;
