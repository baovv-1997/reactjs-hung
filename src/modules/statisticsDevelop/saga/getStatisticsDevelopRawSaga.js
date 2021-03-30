import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';

function* getStatisticsDevelopRaw(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.STATISTICS_DEVELOP_RAW, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      yield put({
        type: 'statisticsDevelopStatus/getStatisticsDevelopRawSuccess',
        data,
      });
    } else {
      yield put({
        type: 'statisticsDevelopStatus/getStatisticsDevelopRawFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: 'statisticsDevelopStatus/getStatisticsDevelopRawFailed',
    });
  }
}

function* getStatisticsDevelopRawSaga() {
  yield takeLatest(
    'statisticsDevelopStatus/getStatisticsDevelopRaw',
    getStatisticsDevelopRaw
  );
}

export default getStatisticsDevelopRawSaga;
