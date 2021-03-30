import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';

function* getRadiationRaw(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.STATISTICS_DEVELOP_RAW, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      yield put({
        type: 'statisticsDevelopStatus/getRadiationRawSuccess',
        data,
      });
    } else {
      yield put({
        type: 'statisticsDevelopStatus/getRadiationRawFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: 'statisticsDevelopStatus/getRadiationRawFailed',
    });
  }
}

function* getRadiationRawSaga() {
  yield takeLatest('statisticsDevelopStatus/getRadiationRaw', getRadiationRaw);
}

export default getRadiationRawSaga;
