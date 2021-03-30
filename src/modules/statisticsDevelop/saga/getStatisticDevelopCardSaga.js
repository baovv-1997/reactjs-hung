import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';

function* getStatisticDevelopCard(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.STATISTICS_DEVELOP_CARD, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      yield put({
        type: 'statisticsDevelopStatus/getStatisticDevelopCardSuccess',
        data,
      });
    } else {
      yield put({
        type: 'statisticsDevelopStatus/getStatisticDevelopCardFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: 'statisticsDevelopStatus/getRadiationRawFailed',
    });
  }
}

function* getStatisticDevelopCardSaga() {
  yield takeLatest(
    'statisticsDevelopStatus/getStatisticDevelopCard',
    getStatisticDevelopCard
  );
}

export default getStatisticDevelopCardSaga;
