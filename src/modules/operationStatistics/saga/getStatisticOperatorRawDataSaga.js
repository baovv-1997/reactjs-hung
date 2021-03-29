import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';

function* getStatisticOperatorRawData(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.OPERATOR_STATISTICS_RAW, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      yield put({
        type: 'statisticsDevelopStatus/getStatisticOperatorRawDataSuccess',
        data,
      });
    } else {
      yield put({
        type: 'statisticsDevelopStatus/getStatisticOperatorRawDataFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: 'statisticsDevelopStatus/getStatisticOperatorRawDataFailed',
    });
  }
}

function* getStatisticOperatorRawDataSaga() {
  yield takeLatest(
    'statisticsDevelopStatus/getStatisticOperatorRawData',
    getStatisticOperatorRawData
  );
}

export default getStatisticOperatorRawDataSaga;
