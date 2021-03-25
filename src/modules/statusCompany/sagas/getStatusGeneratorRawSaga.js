import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';

function* getStatusGeneratorRaw(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.STATUS_GENERATOR_TREND_CHART, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      yield put({ type: 'statusCompany/getStatusGeneratorRawSuccess', data });
    } else {
      yield put({
        type: 'statusCompany/getStatusGeneratorRawFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'statusCompany/getStatusGeneratorRawFailed' });
  }
}

function* getStatusGeneratorRawSaga() {
  yield takeLatest(
    'statusCompany/getStatusGeneratorRaw',
    getStatusGeneratorRaw
  );
}

export default getStatusGeneratorRawSaga;
